import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';

function Home() {
    console.log('Render');

    const urlOne = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/147px-Netlify_logo.svg.png';
    const urlTwo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/320px-Netlify_logo.svg.png';

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
                    <Image
                        src={urlOne}
                        width='147'
                        height='40'
                        alt='Example image one'
                        onLoadingComplete={(width, height) => {
                            if (!assetsLoaded.includes(urlOne)) {
                                console.log('Loaded one', width, height);
                                const allAssets = [...assetsLoaded, urlOne];
                                setAssetsLoaded([...new Set(allAssets)]);
                            }
                        }}
                    />
                }
                itemTwo={
                    <Image
                        src={urlTwo}
                        width='147'
                        height='40'
                        alt='Example image two'
                        onLoadingComplete={(width, height) => {
                            if (!assetsLoaded.includes(urlTwo)) {
                                console.log('Loaded two', width, height);
                                const allAssets = [...assetsLoaded, urlTwo];
                                setAssetsLoaded([...new Set(allAssets)]);
                            }
                        }}
                    />
                }
            />
        </>
    );
}

export default Home;
