import Recipe  from "./Recipe";
import Footer from "./Footer";
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
                    <h3 className="label">South Indian Break Fast</h3>
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
            </div>

            <div className="footer">
                <div>
                    <Footer />
                </div>
                
            </div>
              <div style={{ height: "300px"}} />
        </>
    )
}

export default Home;