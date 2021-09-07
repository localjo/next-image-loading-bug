import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';

function Home() {
    const urlOne = 'https://assets.climatecentral.org/mc2-ge-still/GBR__0__Glasgow__SEC_Centre__L13__present.jpg';
    const urlTwo = 'https://assets.climatecentral.org/mc2-ge-still/GBR__0__Glasgow__SEC_Centre__L13__4p0C.jpg';

    const [expectedAssets, setExpectedAssets] = useState([]);
    const [assetsLoaded, setAssetsLoaded] = useState([]);

    useEffect(() => {
        console.log('Set assets to load');
        const assetsToLoad = [urlOne, urlTwo];
        setExpectedAssets([...new Set(assetsToLoad)]);
    }, []);

    const isDoneLoading = assetsLoaded.length >= expectedAssets.length;

    return (
        <>
            <p>Is loading done? {isDoneLoading ? 'Yes' : 'No'}</p>
            <ReactCompareSlider
                itemOne={
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <Image
                            src={urlOne}
                            layout='fill'
                            objectFit='cover'
                            alt='Example image one'
                            onLoadingComplete={(width, height) => {
                                if (!assetsLoaded.includes(urlOne)) {
                                    console.log('Loaded one', width, height);
                                    const allAssets = [...assetsLoaded, urlOne];
                                    setAssetsLoaded([...new Set(allAssets)]);
                                }
                            }}
                        />
                    </div>
                }
                itemTwo={
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <Image
                            src={urlTwo}
                            layout='fill'
                            objectFit='cover'
                            alt='Example image two'
                            onLoadingComplete={(width, height) => {
                                if (!assetsLoaded.includes(urlTwo)) {
                                    console.log('Loaded two', width, height);
                                    const allAssets = [...assetsLoaded, urlTwo];
                                    setAssetsLoaded([...new Set(allAssets)]);
                                }
                            }}
                        />
                    </div>
                }
            />
        </>
    );
}

export default Home;
