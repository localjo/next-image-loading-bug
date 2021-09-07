import Image from 'next/image';
import { ReactCompareSlider } from 'react-compare-slider';

function Home() {
    console.log('Render');
    return (
        <>
            <p>onLoadingComplete test</p>
            <ReactCompareSlider
                itemOne={
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/147px-Netlify_logo.svg.png'
                        width='147'
                        height='40'
                        alt='Example image one'
                        onLoadingComplete={(width, height) => {
                            console.log('Loaded one', width, height);
                        }}
                    />
                }
                itemTwo={
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/147px-Netlify_logo.svg.png'
                        width='147'
                        height='40'
                        alt='Example image two'
                        onLoadingComplete={(width, height) => {
                            console.log('Loaded two', width, height);
                        }}
                    />
                }
            />
        </>
    );
}

export default Home