import React, { Component } from "react";
import Typed from "react-typed";
import { Container, Row, Col } from 'react-bootstrap';

export default class Technologies extends Component {
  render() {
    return (
      <div>
        <div className="techContainer">
          <div className="type">
            <div>
              <h3 style={{textAlign:"center"}}>Hi, my name is Kenneth Solano</h3>
            </div>
            <div>
              {" "}
              <h2 style={{ textAlign: "center" }}>
                I am{" "}
                <Typed
                  strings={["a developer", "a problem-solver", "a dog lover"]}
                  typeSpeed={120}
                  backSpeed={75}
                  backDelay={1000}
                  // style={{ color: "red" }}
                  loop
                />
              </h2>
            </div>
            <div className="firstIcons" style={{display:"flex"}}>
            {/* <div         style={{
          backgroundImage: "url(./images/github.png)",
          backgroundSize: "cover",
        //   height: "129vh",
          width: "5vw",
          height:"10vh",
          backgroundPosition: "center"
        }}></div> */}
        <a href="https://github.com/klsolano7"><img src={"./images/github.png"} className="firstIconPics"/></a>
        <a href="https://www.linkedin.com/in/kennethsolano/"><img src={"./images/linkedin-logo.png"} className="firstIconPics"/></a>
            </div>
          </div>
          
          <div class="container-fluid">
	<div class="row">
		<div class="col-md-4 mt-5" >
			<div class="card">
				<h5 class="card-header">
					Card title
				</h5>
				<div class="card-body">
					<p class="card-text">
						Card content
					</p>
				</div>
				<div class="card-footer">
					Card footer
				</div>
			</div>
		</div>
		<div class="col-md-4 mt-5">
			<div class="card">
				<h5 class="card-header">
					Card title
				</h5>
				<div class="card-body">
					<p class="card-text">
						Card content
					</p>
				</div>
				<div class="card-footer">
					Card footer
				</div>
			</div>
		</div>
		<div class="col-md-4 mt-5">
			<div class="card">
				<h5 class="card-header">
					Card title
				</h5>
				<div class="card-body">
					<p class="card-text">
						Card content
					</p>
				</div>
				<div class="card-footer">
					Card footer
				</div>
			</div>
		</div>
	</div>
</div>

          {/* <Container>

  <Row>
    <Col><div className="stackBox">1 of 3</div></Col>
    <Col><div className="stackBox">2 of 3 </div></Col>
    <Col><div className="stackBox">3 of 3 </div></Col>
  </Row>
</Container> */}
          {/* <div className="stack">
            <div className="stackBox">+</div>
            <div className="stackBox">+</div>
            <div className="stackBox">+</div>
          </div> */}
        </div>
      </div>
    );
  }
}
