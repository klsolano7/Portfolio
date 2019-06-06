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
          backgroundPosition: "center",
          backgroundAttachment: "fixed"

        }}>
          <div className="box1">
            <p style={{textAlign:"center", width: "25vw"}}>Hey there! Thank you for visiting my page today! 
              This is my portfolio that contains my 3 projects I created at Ironhack Miami. 
              Also below you will see see links to my Github, LinkedIn, and resume.
              </p>
          </div>
          <div className="box2">
          <h1>Kenneth Solano</h1>
          </div>
          <div className="box3">
          <p style={{textAlign:"center", }}>At Ironhack I have been able to learn many languages which include:
          javaScript, React.js, HTML, CSS, AJAX, Node.js, Handlebars, Express.js, Mongodb. 
          As I continue this journey I will keep on inproving these languages and leanr much more.
              </p>
          </div>

      </div>
      <div className="section2"style={{
          backgroundImage: "url(./images/batman.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"

        }}>

      </div>
      <div className="section3"style={{
          backgroundImage: "url(./images/solanos.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"

        }}>

      </div>
      <div className="section4"style={{
          backgroundImage: "url(./images/linkup.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"

        }}>

      </div>
      <div className="bottomNav">
        <li>
          <ul>x</ul>
          <ul>x</ul>
          <ul>x</ul>
        </li>

      </div>
      
    </div>
  );
}

export default App;
