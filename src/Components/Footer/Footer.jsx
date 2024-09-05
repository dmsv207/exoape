import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[140vw] sm:h-[52.5vw] text-[#E0CCBB] bg-[#060606]">
        <div className="top flex h-[80vw] sm:h-[30vw] ">
          <div className="left flex flex-col  w-[35vw] pt-[15vw] h-[50vw] sm:h-[35vw] flex ">
          <h1 className="text-[10vw] sm:text-[5vw] sm:mt-[-1vw] ml-[4vw] font-bold leading-none mt-[15vw]">OUR<br />STORY</h1>
          <h1 className="text-[4vw] sm:text-[1.5vw] w-[65vw] sm:w-[40vw] font-semibold leading-none mt-[23vw] sm:ml-[5vw] sm:mt-[3vw] ml-[4vw]">The Story behind EXO APE is one<br /> of exploration, creativity, and curiosity.</h1>
          </div>
          <div className="right flex items-center justify-center sm:h-[35vw]">
            <video
              autoPlay
              loop
              muted
              className="w-[70vw] sm:w-[65vw] sm:h-[35vw] sm:mt-[0vw] h-[50vw] object-cover mt-[5vw]"
              src="https://www.exoape.com/video/video-6.mp4"
            ></video>
          </div>
        </div>
        <hr className="w-[90vw] ml-[5vw] rounded-[5vw] sm:w-[90vw] sm:mt-[5vw] mt-[10vw]" />
        <div className="bottom text-[4.3vw] sm:text-[2svw] sm:mt-[5vw] mt-[8vw] flex flex-col ml-[8vw]">
            <h1>Willem II Singel 8</h1>
            <h1>6041 HS, Roermond</h1>
            <h1>The Netherlands</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
