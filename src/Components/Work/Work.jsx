import React, { useState, useEffect, useRef } from "react";

function Work() {
  const [isHovered, setIsHovered] = useState(null);
  const [isDesktopVersion, setIsDesktopVersion] = useState(false);
  const videoRefs = useRef([]);

  const elems = [
    { heading: "PixelsFlakes", subheading: "Architectural Marketing Agency", video: "assets/Work1.mp4", image: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)" },
    { heading: "Columbia Pictures", subheading: "Celebrating a Century of Cinema", video: "assets/Work2.mp4", image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)" },
    { heading: "Rino & Pille", subheading: "Effortless Chic Lifestyle", video: "assets/Work3.mp4", image: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)" },
    { heading: "Aebele Interiors", subheading: "Luxurious Design Experience", video: "assets/Work4.mp4", image: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopVersion(window.innerWidth >= 768); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleMouseEnter = (index) => {
    if (isDesktopVersion) {
      setIsHovered(index);
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
    }
  };
  const handleMouseLeave = (index) => {
    if (isDesktopVersion) {
      setIsHovered(null);
      if (videoRefs.current[index]) {
        videoRefs.current[index].pause(); 
      }
    }
  };

  return (
    <>
      <div className="w-full relative bg-[#F1EBE4]">
        <div className="max-w-screen-2xl mx-auto px-5 py-10 sm:px-10">
          <div className="featured text-[2vw] sm:text-[2vw] sm:font-semibold font-semibold">
            <h1>FEATURED PROJECTS</h1>
          </div>
          <h1 className="sm:text-[9vw] text-[4vw] font-bold">WORK</h1>
          <p className="leading-2 text-[3vw] font-semibold sm:font-normal sm:leading-none">
            Highlights of cases that we passionately build with forward-thinking clients and friends over the years.
          </p>
          <div className="elems mt-[2vw]">
            {elems.map((item, index) => (
              <div
                key={index}
                className="elem w-full"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="mt-[10vw]">
                  <h3 className="font-semibold sm:font-semibold text-[6vw] sm:text-[2vw]">
                    {item.heading}
                  </h3>
                  <p className="font-semibold sm:font-semibold sm:opacity-40 sm:text-[1.7vw]">
                    {item.subheading}
                  </p>
                </div>
                <div className="video w-full relative h-[104vw] overflow-hidden flex sm:h-[40vw]">
                  {isDesktopVersion ? (
                    <>
                      <img
                        className="hidden sm:block w-full h-full object-cover"
                        src={item.image}
                        alt={item.heading}
                      />
                      {isHovered === index && (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="absolute w-full h-full object-cover"
                          loop
                          muted
                          src={item.video}
                        ></video>
                      )}
                    </>
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="block sm:hidden w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      src={item.video}
                    ></video>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
