import React, { Component, Fragment } from "react";
import Typed from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Bootstrap} from "../Components/Icons"
import {Css, Html, IconReact, Sass, Jquery, Mongodb, Node} from "../Components/Icons"
// import { ReactComponent as ReactLogo } from '../assets/images/react.jpg';



export default class Technologies extends Component {
  render() {

    const x = 50;

    return (
      <Fragment>
        <section className="section2">
          <div className="type ">

            <div>
              <h2 style={{ textAlign: "center", color:"#e8e8e8" }}>
                Hi, my name is Kenneth Solano
              </h2>
            </div>
            <div>
              {" "}
              <h3 style={{ textAlign: "center", color:"#e8e8e8" }}>
                I am{" "}
                <Typed
                  strings={["a developer", "a problem-solver", "a dog lover"]}
                  typeSpeed={120}
                  backSpeed={75}
                  backDelay={1000}
                  // style={{ color: "red" }}
                  loop
                />
              </h3>
            </div>
            <div className="firstIcons" style={{ display: "flex" }}>
              <a href="https://github.com/klsolano7">
                <img src={"./images/github.png"} className="firstIconPics" />
              </a>
              <a href="https://www.linkedin.com/in/kennethsolano/">
                <img
                  src={"./images/linkedin-logo.png"}
                  className="firstIconPics"
                />
              </a>
            </div>
          </div>

          <div className="container" id="technologies">
            <div className="row">
              <div className="col mb-4" style={{height:"25vh", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-5%"}}>
                <h1 className="text-center text-white">
                  <span className="tech-text">my</span>
                  <span className="stack-text">Stack</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 frontStack ">
                {/* <Slide bottom> */}

                <div className="card text-center" style={{ color: "black" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {/* <FrontendSVG fill={"#00ffd5"} className="mb-3" /> */}
                      <br />
                      Front-End
                    </h5>
                    <hr />
                    <p className="card-text text-center">
                      Practice clean code, optimize site performance & latest
                      technologies
                    </p>

                    <ul class="list-group text-center">
                      <div className="row">
                        <div className="col-6">
                          <li class="list-group-item">
                          {/* <ReactLogo height={x} width={x} className="mb-2" /> */}
                          <IconReact/>
                            <div>React.js</div>
                          </li>
                          <li class="list-group-item">
                            <Html/><div>HTML5</div>
                          </li>
                          <li class="list-group-item">
                            <Css/><div>CSS3</div>
                          </li>
                        </div>
                        <div className="col-6">
                          <li class="list-group-item">
                            <Sass/><div>Sass</div>
                          </li>
                          <li class="list-group-item">
                            <Jquery/><div>jQuery</div>
                          </li>
                          <li class="list-group-item">
                            <Bootstrap/><div>Bootstrap</div>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                {/* </Slide> */}
              </div>
              <div className="col-lg-6">
                {/* <Slide right> */}
                <div className="card" style={{ color: "black" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {/* <BackEndSVG fill={"#00ffd5"} className="mb-3" /> */}
                      <br />
                      Back-End
                    </h5>
                    <hr />
                    <p className="card-text text-center">
                      Application optimization, scalability, and data storage
                      solutions.{" "}
                    </p>
                    <ul class="list-group text-center">
                      <div className="row">
                        <div className="col-6">
                          <li class="list-group-item">
                            <Node/><div>Node.js</div>
                          </li>
                          <li class="list-group-item">
                            <Mongodb/><div>MongoDB</div>
                          </li>
                          <li class="list-group-item">
                            Pic<br />Mongoose
                          </li>
                        </div>
                        <div className="col-6">
                          <li class="list-group-item">
                            Pic<br />ExpressJs
                          </li>
                          <li class="list-group-item">
                            Pic<br />MongoLab
                          </li>
                          <li class="list-group-item">
                            Pic<br />AJAX
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                {/* </Slide> */}
              </div>
            </div>
          </div>
        </section>
      </Fragment>

      // <div id="technologies">
      //   <div className="techContainer">
      //     <div className="type">
      //       <div>
      //         <h3 style={{textAlign:"center"}}>Hi, my name is Kenneth Solano</h3>
      //       </div>
      //       <div>
      //         {" "}
      //         <h2 style={{ textAlign: "center" }}>
      //           I am{" "}
      //           <Typed
      //             strings={["a developer", "a problem-solver", "a dog lover"]}
      //             typeSpeed={120}
      //             backSpeed={75}
      //             backDelay={1000}
      //             // style={{ color: "red" }}
      //             loop
      //           />
      //         </h2>
      //       </div>
      //       <div className="firstIcons" style={{display:"flex"}}>

      //   <a href="https://github.com/klsolano7"><img src={"./images/github.png"} className="firstIconPics"/></a>
      //   <a href="https://www.linkedin.com/in/kennethsolano/"><img src={"./images/linkedin-logo.png"} className="firstIconPics"/></a>
      //       </div>
      //     </div>

      //   </div>
      // </div>
    );
  }
}
