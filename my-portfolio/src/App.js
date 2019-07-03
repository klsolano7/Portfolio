import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Particles from "react-particles-js";
import Technologies from "./Components/Technologies"
import Typed from "react-typed";

const particlesOpt = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};



// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 1000;
//   this.txt = "";
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName("typewrite");
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = elements[i].getAttribute("data-type");
//     var period = elements[i].getAttribute("data-period");
//     if (toRotate) {
//       new TxtType(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);
// };

function App() {
  return (
    <div>
    <div className="mainContainer">
      <div className="navbar">
      <h1 style={{color:"white"}}>KS</h1>
        {/* <img width="50px" src={this.state.user.imageUrl} /> */}
        <NavLink to="/dashboard" exact>
          Technologies
        </NavLink>
        <NavLink to="/searchevent">Projects</NavLink>
        <NavLink to="/signup">Contact</NavLink>
      </div>
      <Particles params={particlesOpt} />


        {/* <Particles
        params={
          particlesOpt
        }
      /> */}
        {/* <h1 style={{display:"flex", justifyContent:"center", }}> 
  <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Ken.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
    <span class="wrap"></span>
  </a>
</h1> */}
       
  

      {/* <div
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
      </div> */}

    </div>
    <a href="Technologies" ><div style={{display:"flex", justifyContent:"center", backgroundColor:"black",height:"5vh", alignItems:"center"}}>
    <img src={"./images/chevron.png"} className="arrow"/>
    </div>
    </a>


<Technologies to={Technologies}/>
{/* <h2>
                  I am{" "}
                  <Typed
                    strings={["a developer", "a problem-solver", "a dog lover"]}
                    typeSpeed={120}
                    backSpeed={75}
                    backDelay={1000}
                    // style={{ color: "red" }}
                    loop
                  />

                </h2> */}

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


// background-color: slategrey;