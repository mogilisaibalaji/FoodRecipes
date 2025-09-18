import React from "react";

function Home(){
    return(
        <>
            <div className="Logo" width="100px">
                <img src="/download.jpeg" alt="logo" width="50px" height="50px" />
                <input className="InputBox" type="Text" placeholder="Enter the Recipe"/>
            </div>
            <h3>South Indian Break Fast</h3>
            <div className="SouthBreakFast">
                <img src="/dosa.jpeg"/>
                <img src="/idly.jpeg"/>
                <img src="/vada.jpeg"/>
                <img src="/pongal.jpeg"/>
                <img src="/upma.jpeg"/>
             
            </div>
        </>
    )
}

export default Home;