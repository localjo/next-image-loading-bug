import Image from 'next/image';

function Home() {
  console.log('Render');
  return (
    <>
      <p>onLoadingComplete test</p>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/147px-Netlify_logo.svg.png"
        width="147"
        height="40"
        alt="Example image"
        onLoadingComplete={(width, height)=>{
          console.log('Loaded', width, height);
        }}
      />
    </>
  )
}

export default Home