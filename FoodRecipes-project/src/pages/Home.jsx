 import Recipe  from "./Recipe";
import "./Home.css";

        function Home(){
            return(
         <>
            <div className="Logo">
                <img className="LogoImg " src="/download.jpeg" alt="logo" />
                <input className="InputBox" type="Text" placeholder="Enter the Recipe"/>
            </div>
            <div>
                <div>
                    <p className="label">South Indian Break Fast</p>
                </div>
                <div className="South-img">
                    <img src="./dosa.jpeg"  alt="dosa"/>
                    <img src="./idly.jpeg"  alt="idly"/>
                    <img src="./vada.jpeg"  alt="vada"/>
                    <img src="./pongal.jpeg"  alt="pongal"/>
                </div>

                <div className="item-button">
                   <div><Recipe/></div>
                </div>
                <div></div>
            </div>
              <div style={{ height: "1000px"}} />
        </>
    )
}

export default Home;