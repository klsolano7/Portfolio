import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <div className="section1"style={{
          backgroundImage: "url(./images/image1.jpg)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",

        }}>

      </div>
      <div className="section2"style={{
          backgroundImage: "url(./images/batman.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",

        }}>

      </div>
      <div className="section3"style={{
          backgroundImage: "url(./images/solanos.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",

        }}>

      </div>
      <div className="section4"style={{
          backgroundImage: "url(./images/linkup.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",

        }}>

      </div>
      
    </div>
  );
}

export default App;
