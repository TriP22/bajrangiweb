import React from "react";
import logoReact from "./logo.svg";
import logo from "./assets/img/logo.png";
import heroBg from "./assets/img/homeShape2.png";
import hero from "./assets/img/hero.png";
import playStore from "./assets/img/google-play-badge.png";
import appStore from "./assets/img/app-store.png";
import "./App.css";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

      <Container className="pt-3">
        <Row>
          <Col md={4}>
            <p className="th-primary th-14">Call for queries: +91-7418520963</p>
          </Col>
          <Col md={4} className="text-center">
            <Image className="th-logo" src={logo} />
          </Col>
          <Col md={4}></Col>
          <Col md={6} className="my-auto">
            <p className="th-50 th-bold">Coming in your pocket soon!!</p>
            <p className="th-18 th-grey">
              We connect people with the best in their cities. Let’s empower
              local businesses around us.
            </p>
            <p className="th-18 th-grey">
              With your favorite restaurants at your fingertips, Bajrangi
              satisfies your cravings and connects you with possibilities — more
              time and energy for yourself and those you love.
            </p>
            <Row className="pt-5">
              <Col>
                <Button className="th-btn-primary th-medium w-100 th-16">
                  Get Early Access
                </Button>
              </Col>
              <Col>
                <Button className="th-btn-primary-outline th-medium w-100 th-16">
                  Learn More
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col md={6}>
            <Image className="th-hero-bg" src={heroBg} />
            <div className="py-md-5 text-center">
              <div className="py-md-5 text-right">
                <Image className="th-hero" src={hero} />
              </div>
              <Image className="" src={playStore} />
              <Image className="" src={appStore} />
            </div>
          </Col>
        </Row>
        <Row className="py-md-5">
          <Col md={12} className="text-center">
            <p className="th-primary th-medium th-28">Essential Products</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
