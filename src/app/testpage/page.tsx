



export default function TestPage() {


  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen py-2 px-4">
      <div className="py-12">
  
      </div>
      <div className="flex flex-col justify-start items-center w-full max-w-screen-lg py-2 px-4 text-4xl font-bold text-white">
        <h2>Enter the Tankstelle</h2>
        <div className="mt-8 w-full">
          <iframe
            title="projektraum tankstelle"
            frameBorder="0"
            allowFullScreen
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/7064a9e443aa4493a995a7a39320c6f6/embed"
            className="w-full h-[600px]"
          ></iframe>
        </div>
        <div>
        <div className="flex justify-center mt-10">
          <h2>Lichtbildnerei</h2>
        </div>
  <iframe
    allowFullScreen
    scrolling="no"
    className="fp-iframe"
    style={{ border: '1px solid lightgray', marginTop: '50px', width: '800px', height: '400px' }}
    src="https://heyzine.com/flip-book/02f0bcc8ca.html"
  ></iframe>
</div>
<div className="flex justify-center m-10">
          <h2>zwölftausend</h2>
        </div>
<iframe
  width="760"

  height="515"
  src="https://www.youtube.com/embed/UxW4BC9YngI"
  title="YouTube video player"

  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<div className="flex justify-center m-10">
          <h2>3D Flip book</h2>
        </div>


    
      </div>
    </div>
  );
}