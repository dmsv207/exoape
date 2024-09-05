import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import Work from "./Work/Work";
import PlayReel from "./PlayReel/PlayReel";
import Images from "./Images/Images";
import Footer from "./Footer/Footer";

function MainPage(){
    return(
        <>
        <LandingPage/>
        <Work/>
        <PlayReel/>
        <Images/>
        <Footer/>
        </>
    )
}
export default MainPage;