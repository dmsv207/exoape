import React from "react";
import "./LandingPage.css";
import { motion } from 'framer-motion';
import gsap from "gsap";


  
function LandingPage() {
    const letterAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.05, 
            duration: 0.5,
            ease: 'easeOut'
          }
        })
      };
      
      const lineAnimation = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          }
        }
      };
      
      const AnimatedTextLine = ({ text }) => (
        <motion.span
          className="inline-block"
          variants={lineAnimation}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((letter, i) => (
            <motion.span key={i} custom={i} variants={letterAnimation} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      );
    return (
        <>
            <div className="w-full relative  h-[155vh] sm:h-[250vh] ">
                <div className="picture w-full h-full overflow-hidden">
                    <img data-scroll data-scroll-speed="-1" className="w-full h-full object-cover" src="assets/background.jpg" alt="Background" />
                </div>
                <div className="w-full absolute top-0 sm:top-[10%] sm:left-[15%] sm:max-w-xl">
                    <div className="text px-5 sm:px-0 py-5 sm:py-10">
                    <div className="para mt-[65vw] sm:mt-0 text-white mt-[25vw] sm:mt-[20vw]">
                           <p className="text-md sm:text-[1.2vw] font-semibold leading-2">
                             <AnimatedTextLine text="Global Design Studio Partnering" />
                           </p>
                           <p className="text-md sm:w-[25vw] sm:text-[1.2vw] font-semibold leading-2">
                             <AnimatedTextLine text="with brands and businesses that create" />
                           </p>
                           <p className="text-md sm:w-[25vw] sm:text-[1.2vw] font-semibold leading-2">
                             <AnimatedTextLine text="exceptional experiences where people" />
                           </p>
                           <p className="text-md sm:text-[1.2vw] font-semibold leading-2">
                             <AnimatedTextLine text="live, work, and unwind" />
                           </p>
                  </div>
                  <div className="headings text-white mt-10 sm:mt-8 mt-[15vw] sm:mt-[8vw]">
                    <h1 className="text-6xl sm:text-[6vw]  sm:w-[30vw] font-bold">
                      <AnimatedTextLine text="DIGITAL" />
                    </h1>
                    <h1 className="text-6xl sm:text-[6vw]  sm:w-[30vw]  font-bold">
                      <AnimatedTextLine text="DESIGN" />
                    </h1>
                    <h1 className="text-6xl sm:text-[6vw]  sm:w-[35vw]  font-bold">
                      <AnimatedTextLine text="EXPERIENCE" />
                    </h1>
                       </div>
                        <div className="para-2 mt-[30vw] sm:mt-16 text-white">~
                            <p className="text-md sm:text-[1vw] font-semibold leading-relaxed">
                                We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space.
                            </p>
                            <a className="border-b-[1px] inline-block border-zinc-100 pb-1 mt-[8vw] sm:mt-10 font-bold text-lg sm:text-2xl" href="#">THE STUDIO</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
