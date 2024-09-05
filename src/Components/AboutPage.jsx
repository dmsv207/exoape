import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer/Footer";
function AboutPage(){
    return(
        <>
        <div className=" w-full h-screen relative bg-[#BEC6A0]">
                <h1 className=" leading-none absolute text-[8vw] w-[100vw] ml-[5vw]  top-[35vw] font-semibold sm:text-[3.5vw] sm:top-[20vw] sm:ml-[15vw]">We partner with brands and <br />businesses that create <br />exceptional experiences where <br />people live, work and unwind.</h1>
                <div className="services absolute top-[110vw] text-[6vw] font-bold ml-[8vw] text-[#E4E0DB] sm:top-[37vw] sm:ml-[15vw] sm:text-[1.5vw]">
                    <p>Interior Design &amp; Furniture</p>
                    <p>Architecture &amp; Real Estate</p>
                    <p>Hospitality, Travel &amp; Tourism</p>
                </div>
        </div>
        <div className="w-full h-[176vw] sm:h-[80vw]">
        <div className="text flex pt-[25vw] sm:pt-[1vw] whitespace-nowrap overflow-hidden  gap-[5vw]">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold Capitalize -mb-1">Forever Uprwards <span className="text-[18vw] mt-[4vw]">∞</span></motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold Capitalize -mb-1">Forever Uprwards <span className="text-[18vw] mt-[4vw]">∞</span></motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:4 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold Capitalize -mb-1">Forever Uprwards <span className="text-[18vw] mt-[4vw]">∞</span></motion.h1>  
            </div>
           <h1 className=" w-[80vw] ml-[10vw] mt-[10vw] font-semibold sm:text-[2vw] sm:mt-[4vw] sm:ml-[15vw]">We believe that the most effective <br />outcomes are achieved when data-driven insights are used to inspire <br />emotive experiences.Leading to increased brand loyalty, long-term <br />customer engagement , and higher <br /> conversion rates. </h1>
        <img className="w-[80vw] h-[50vw] ml-[10vw] mt-[20vw] sm:w-[80vw] sm:h-[35vw] object-cover sm:mt-[4vw]" src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/2400x1600/filters:quality(90)" alt="" />
        </div>
        <Footer/>
        </>
    )
}
export default AboutPage;   