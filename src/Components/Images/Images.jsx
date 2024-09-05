import React from "react";

function Images(){
    return(
        <>
        <div className="w-full h-[70vh] sm:h-[100vh] bg-[#F1EBE4] flex items-center justify-center overflow-hidden">
        <div className="w-[40%] relative sm:w-[20%] sm:h-[70%]   h-1/2 mt-[5vw]  pt-[5vw]">
        <div className="w-20 h-[7rem] sm:w-[20vw] sm:h-[15vw]  absolute -right-[18vw] top-6 ">
            <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
        </div>
        <div className="w-[6rem] sm:w-[20vw] sm:ml-[-12vw] sm:h-[17vw] absolute aspect-video -left-1/2 top-[10vw]">
            <video autoPlay loop muted className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div className="absolute mt-[5vw] w-[6rem] sm:w-[20vw] sm:h-[15vw] aspect-video  -left-[70%] -bottom-10 ">
            <img className="w-full sm:mt-[10vw] h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
        </div>
        <div className="absolute w-[10rem] sm:w-[20vw] sm:ml-[-12vw] sm:h-[17vw] aspect-[1.5/1] -right-[70%] -bottom-[37%] ">
         <video autoPlay muted loop className="w-[10rem] sm:w-[20vw] sm:ml-[10vw] sm:h-[17vw]  h-full ovject-cover" src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        
        <img className="w-full h-full object-cover"  src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" /></div>
        </div>
        </>
    )
}

export default Images; 