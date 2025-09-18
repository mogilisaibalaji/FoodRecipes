import React from "react";

import "./Home.css";
function Home(){
    return(
        <>
       
            <div className="Logo">
                <img className="LogoImg " src="/download.jpeg" alt="logo" />
                <input className="InputBox" type="Text" placeholder="Enter the Recipe"/>
            </div>
            <h3 className="label">South Indian Break Fast</h3>
            <div className="SouthBreakFast">
                <img src="/dosa.jpeg" alt="dosas" />
                <img src="/idly.jpeg" alt="idly"  />
                <img src="/vada.jpeg" alt="vada" />
                <img src="/pongal.jpeg" alt="pongal" />
            </div>
             <div style={{ height: '2000px' }} />
        </>
    )
}

export default Home;