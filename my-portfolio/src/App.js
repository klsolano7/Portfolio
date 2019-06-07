import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <div
        className="section1"
        style={{
          backgroundImage: "url(./images/image1.jpg)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="box1">

        </div>
        <div className="box2">
          <h1 style={{ textAlign: "center", width: "25vw",color:"white" }}>Kenneth Solano</h1>
        </div>
        <div className="box3">

        </div>
      </div>
      <div
        className="section2"
        style={{
          backgroundImage: "url(./images/batman.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <div
        className="section3"
        style={{
          backgroundImage: "url(./images/solanos.png)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <div
        className="section4"
        style={{
          backgroundImage: "url(./images/linkup.png)",
          backgroundSize: "cover",
          height: "129vh",
          width: "100%",
          backgroundPosition: "center"
        }}
      />
      <div className="about">
        <div className="about1"><p style={{ textAlign: "center" }}>
            At Ironhack I have been able to learn many languages which include:
            javaScript, React.js, HTML, CSS, AJAX, Node.js, Handlebars,
            Express.js, Mongodb. As I continue this journey I will keep on
            inproving these languages and leanr much more.
          </p></div>
        <div className="about1"><h1>About</h1></div>
        <div className="about1"><p style={{ textAlign: "center", width: "25vw",  }}>
            Hey there! Thank you for visiting my page today! This is my
            portfolio that contains my 3 projects I created at Ironhack Miami.
            Also below you will see see links to my Github, LinkedIn, and
            resume.
          </p></div>

        
      </div>
      <div className="bottomNav" style={{backgroundColor:"#191818b0"}}>
        <li>
          <ul>
            <a href="https://github.com/klsolano7">
              {" "}
              <img
                src="./images/git.svg"
                style={{
                  height: "12vh",
                  marginBottom: "10%",
                  padding: "8%"
                }}
              />
            </a>
          </ul>
          <ul><a href="https://www.linkedin.com/in/kennethsolano/">
              {" "}
              <img
                src="./images/linkedin.svg"
                style={{
                  height: "12vh",
                  marginBottom: "10%",
                  padding: "8%"
                }}
              />
            </a></ul>
          <ul><a href="#">
              {" "}
              <img
                src="./images/resume.svg"
                style={{
                  height: "12vh",
                  marginBottom: "10%",
                  padding: "8%"
                }}
              />
            </a></ul>
        </li>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="bottomNav">
<NavLink className="bottomNavLinks">
  <ul>x</ul>
  <ul>x</ul>
  <ul>x</ul>
</NavLink>

</div> */
}


//continuing to work on project and studying react in Udemy