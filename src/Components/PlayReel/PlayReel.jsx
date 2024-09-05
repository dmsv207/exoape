import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PlayReel() {
  const parent = useRef(null);
  const videodiv = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const animation = gsap.to(videodiv.current, {
      width: "120%",
      height: "100%",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom top",
        scrub: 2, 
        pin: true,
      }
    });
    return () => {
      animation.kill();
    };
  }, []);

    return(
        <>
        <div ref={parent} className="w-full h-screen relative overflow-hidden ">
            <div ref={videodiv} className="w-[40vw] sm:mt-[5vw]  overflow-hideen aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-5vw]">
            <video className="video w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " muted loop autoPlay src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
            </div>
            <div className="overlay  py-20 w-full h-full bg-black text-white flex flex-col justify-between ">
                <div className="w-full flex items-center justify-center gap-3">
                    <h3 className="sm:text-[4vw] font-semibold sm:font-semibold mt-[5vw]">WORK IN MOTION</h3>
                </div>
                <h1 className="w-full flex  justify-center mt-[-10vw] sm:mt-[5vw] gap-[50vw] items-center">
                    <div className="text-[8vw]">PLAY</div>
                    <div className="text-[8vw]">REEL</div>
                </h1>
                <p className="px-10 sm:text-[1vw] sm:ml-[30vw] text-xs">Our Work is best Experienced in motion.Dont't forget to put on your headphones</p>
            </div>
        </div>
        </>
    )
}
export default PlayReel;