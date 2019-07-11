import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Particles from "react-particles-js";
import Technologies from "./Components/Technologies"
import Typed from "react-typed";
import AnchorLink from 'react-anchor-link-smooth-scroll'

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




function App() {
  return (
    <div>
    <div className="mainContainer" >
      <div className="navbar" >
      <h1 style={{color:"#e8e8e8"}}>KS</h1>
        {/* <img width="50px" src={this.state.user.imageUrl} /> */}
        {/* <NavLink to="/dashboard" exact>
          Technologies
        </NavLink> */}
        <AnchorLink href="#technologies">Technologies</AnchorLink>
        <NavLink to="/searchevent">Projects</NavLink>
        <NavLink to="/signup">Contact</NavLink>
      </div>
      <Particles params={particlesOpt} />




    </div>
    <AnchorLink href="#technologies"><div style={{display:"flex", justifyContent:"center", backgroundColor:"black",height:"5vh", alignItems:"center"}}>
    <img src={"./images/chevron.png"} className="arrow"/>
    </div>
    </AnchorLink>


<Technologies/>


    </div>
  );
}

export default App;

