import React from "react";
import logoReact from "./logo.svg";
import logo from "./assets/img/logo.png";
import heroBg from "./assets/img/homeShape3.png";
import hero from "./assets/img/hero.png";
import playStore from "./assets/img/google-play-badge.png";
import appStore from "./assets/img/app-store.png";
import icon from "./assets/img/icon.png";
import footerBackdrop from "./assets/img/footer-backdrop.png";
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
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <div className="py-5">
                  <div
                    className="w-100 th-hero-img"
                    style={{
                      backgroundImage: `url(${hero})`,
                    }}
                  ></div>
                </div>

                <div className="text-center">
                  <button className="th-btn-primary-ghost">
                    <Image className="th-playStore-btn" src={playStore} />
                  </button>
                  <button className="th-btn-primary-ghost">
                    <Image className="th-appStore-btn" src={appStore} />
                  </button>
                </div>
              </Col>
            </Row>
            <Image className="th-hero-bg" src={heroBg} />
          </Col>
        </Row>

        <Row className="py-md-5 text-center">
          <Col md={12} className="text-center">
            <p className="th-primary th-medium th-28">Essential Products</p>
          </Col>
          <Col md={2} className="text-center">
            <Image className="th-icon-img" src={playStore} />
            <p className="th-16">Restaurant</p>
          </Col>
          <Col md={2} className="text-center">
            <Image className="th-icon-img" src={playStore} />
            <p className="th-16">Restaurant</p>
          </Col>
        </Row>
      </Container>

      {/* Get App Section Start */}
      <div className="th-get-app py-5">
        <Image className=" w-100" src={footerBackdrop} />

        <Container className="py-5">
          <div className="text-center">
            <p className="th-28 th-medium">Book your Early Access</p>
            <p className="th-26 th-grey pb-5">
              Become the first few to put your hands on the amazing offers and
              sales lined up especially for you
            </p>
          </div>
          <Row>
            <Col></Col>
            <Col>
              <input className="h-100 w-100 px-3" placeholder="Mobile Number" />
            </Col>
            <Col>
              <Button className="th-btn-primary th-medium w-100 th-16 px-4">
                Submit
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <div className="text-center">
          <p className="text-uppercase th-bold">
            Made with{" "}
            <i class="fa fa-heart th-28 th-primary" aria-hidden="true"></i> in
            Himachal
          </p>
        </div>
      </div>
      {/* Get App Section End */}

      {/* Footer Start */}
      <div className="th-footer py-5">
        <Container className="pt-5">
          <Row>
            <Col md={4}>
              <p className="th-bold th-14">©2020 Bajrangi.in</p>
            </Col>
            <Col md={4} className="text-center">
              <Image className="th-footer-logo" src={logo} />
            </Col>
            <Col md={4} className="text-right">
              <Button className="th-btn-primary th-medium th-16">
                Scroll To Top
                <i class="fa fa-angle-double-up pl-3" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
          <hr className="th-footer-hr"></hr>
          <div className="text-right">
            <span className="pl-2">
              <button className="th-btn-primary-ghost pr-0">
                <i class="fa fa-facebook th-20" aria-hidden="true"></i>
              </button>
            </span>
            <span className="pl-2">
              <button className="th-btn-primary-ghost pr-0">
                <i class="fa fa-linkedin th-20" aria-hidden="true"></i>
              </button>
            </span>
            <span className="pl-2">
              <button className="th-btn-primary-ghost pr-0">
                <i class="fa fa-twitter th-20" aria-hidden="true"></i>
              </button>
            </span>
            <span className="pl-2">
              <button className="th-btn-primary-ghost pr-0">
                <i class="fa fa-youtube-play th-20" aria-hidden="true"></i>
              </button>
            </span>
            <span className="pl-2">
              <button className="th-btn-primary-ghost pr-0">
                <i class="fa fa-instagram th-20" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </Container>
      </div>
      {/* Footer End */}
    </React.Fragment>
  );
}

export default App;
