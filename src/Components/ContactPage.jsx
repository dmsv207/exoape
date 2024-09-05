import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";

function ContactPage(){
    return(
        <>
        <div className=" w-full  h-screen text-black bg-[#E2BFD9]"> 
        <div className="text flex pt-[30vw] sm:pt-[10vw] whitespace-nowrap overflow-hidden  gap-[5vw]">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold uppercase -mb-1">GET IN CONTACT -</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold uppercase -mb-1">GET IN CONTACT -</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5 }} className="text-[13vw] sm:text-[9vw] leading-none font-semibold uppercase -mb-1">GET IN CONTACT -</motion.h1>
                </div>
            <div className="text2 sm:mt-[1vw] sm:flex  mt-[20vw]">
            <div className="left sm:w-[50vw] sm:h-[30vw] sm:pt-[5vw]  w-[100vw] h-[50vw]">
                <h1 className="font-semibold sm:text-[1.5vw] sm:mt-[3vw] text-[4.5vw] mt-[6vw] ml-[5vw]">Ready for lift-off? Ping, tweet, message or poke <br />— and we will get back as soon as possible.</h1>
                <h1 className="font-semibold sm:text-[1.5vw] sm:mt-[2vw] text-[4.5vw] mt-[6vw] ml-[5vw]">dikshits207@gmail.com</h1>
                <h1 className="font-bold sm:text-[1.5vw] sm:mt-[2vw]  text-[4.5vw] mt-[6vw] ml-[5vw]" >+91 9518245002</h1>
            </div>
            <div className="right  w-[100vw] sm:w-[50vw] sm:h-[30vw] sm:pt-[5vw]  h-[50vw]">
               <h1 className="font-semibold  pt-[5vw] ml-[5vw] sm:mt-[5vw] sm:ml-[30vw] sm:text-[1.5vw] ">Willem || Singel 8 <br />6041 HS,Roermond <br />The Netherlands</h1>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default ContactPage;