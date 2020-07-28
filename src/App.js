import React from "react";
import Axios from "axios";
import logo from "./assets/img/logo.png";
import heroBg from "./assets/img/homeShape3.png";
import hero from "./assets/img/hero.png";
import playStore from "./assets/img/google-play-badge.png";
import appStore from "./assets/img/app-store.png";
import footerBackdrop from "./assets/img/footer-backdrop1.png";
import partner from "./assets/img/partner.png";
import merchant from "./assets/img/merchant.png";
import "./App.css";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Category from "./component/Category";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
      serviceData: [],
    };
  }

  fetchCategory = (params) => {
    Axios.get("clintapiV1/category", { params: { ...params } })
      .then((res) => {
        this.setState({ categoryData: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchService = (params) => {
    Axios.get("/clintapiV1/servicetype", { params: { ...params } })
      .then((res) => {
        this.setState({ serviceData: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.fetchCategory({});
    this.fetchService({});
  };

  render() {
    return (
      <React.Fragment>
        {/* Top Bar Start */}
        <div className="th-hidden-md th-bg-primary text-center py-2">
          <p className="th-primary th-12 th-white mb-0">
            Call for queries: +91-7418520963
          </p>
        </div>
        <Container className="pt-3">
          <Row>
            <Col md={4} className="th-hidden-sm">
              <p className="th-primary th-14">
                Call for queries: +91-7418520963
              </p>
            </Col>

            <Col md={4} className="text-center">
              <Image className="th-logo" src={logo} />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
        {/* Top Bar End */}

        {/* Hero Section Start */}
        <Container className="py-5">
          <Row>
            <Col md={6} className="my-auto">
              <p className="th-50 th-bold">Coming in your pocket soon!!</p>
              <p className="th-18 th-grey">
                We connect people with the best in their cities. Let’s empower
                local businesses around us.
              </p>
              <p className="th-18 th-grey">
                With your favorite restaurants at your fingertips, Bajrangi
                satisfies your cravings and connects you with possibilities —
                more time and energy for yourself and those you love.
              </p>
              <Row className="pt-5">
                <Col xl={4} xs={6}>
                  <Button className="th-btn-primary th-medium w-100 th-16">
                    Get Early Access
                  </Button>
                </Col>
                <Col xl={4} xs={6}>
                  <Button className="th-btn-primary-outline th-medium w-100 th-16">
                    Learn More
                  </Button>
                </Col>
                <Col xl={4}></Col>
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
                    <span className="pr-3">
                      <button className="th-btn-primary-ghost">
                        <Image className="th-playStore-btn" src={playStore} />
                      </button>
                    </span>

                    <button className="th-btn-primary-ghost">
                      <Image className="th-appStore-btn" src={appStore} />
                    </button>
                  </div>
                </Col>
              </Row>
              <Image className="th-hero-bg" src={heroBg} />
            </Col>
          </Row>
        </Container>
        {/* Hero Section End */}

        {/* Category Start */}
        <Container>
          <Row className="pt-md-5 justify-content-md-center">
            <Col md={12} className="text-center">
              <p className="th-primary th-medium th-28 mb-4">
                Essential Products
              </p>
            </Col>
            {this.state.categoryData.map((item, index) => {
              return (
                <>
                  <Category
                    categoryImage={item.category_image}
                    categoryName={item.category_name}
                  />
                </>
              );
            })}
          </Row>
          <Row className="py-md-5 justify-content-md-center">
            <Col md={12} className="text-center">
              <p className="th-primary th-medium th-28 mb-4">
                Professional Services
              </p>
            </Col>
            {this.state.serviceData.map((item, index) => {
              return (
                <>
                  <Category
                    categoryImage={item.logo}
                    categoryName={item.servicetype_name}
                  />
                </>
              );
            })}
          </Row>
        </Container>
        {/* Category End */}

        {/* Delivery Partners Start */}
        <Container className="py-5">
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <p className="th-primary th-medium th-28">Delivery Partners</p>
            </Col>
            <Col md={6}>
              <div
                className="w-100 th-side-img"
                style={{
                  backgroundImage: `url(${partner})`,
                }}
              ></div>
            </Col>
            <Col md={6} className="my-auto">
              <p className="th-18 th-grey">
                Delivering with Bajrangi, you get flexibility and financial
                stability. Sprint for a living or for a goal, all on your
                schedule and on your own terms.
              </p>
              <p className="th-14 th-grey">
                We will send you a link, open it on your phone to download the
                app
              </p>
              <Row className="pb-3">
                <Col>
                  <input
                    className="h-100 w-100 px-3"
                    placeholder="Mobile Number"
                  />
                </Col>
                <Col>
                  <Button className="th-btn-primary th-medium w-100 th-16 px-4">
                    Share App Link
                  </Button>
                </Col>
              </Row>
              <p className="th-14 th-grey mb-0">Download app from</p>
              <div className="">
                <span className="pr-3">
                  <button className="th-btn-primary-ghost">
                    <Image className="th-playStore-btn" src={playStore} />
                  </button>
                </span>

                <button className="th-btn-primary-ghost">
                  <Image className="th-appStore-btn" src={appStore} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Delivery Partners End */}

        {/* Store Merchants Start */}
        <Container className="py-5">
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <p className="th-primary th-medium th-28">Store Merchants</p>
            </Col>
            <Col md={6}>
              <div
                className="w-100 th-side-img"
                style={{
                  backgroundImage: `url(${merchant})`,
                }}
              ></div>
            </Col>
            <Col md={6} className="my-auto">
              <p className="th-18 th-grey">
                Bajrangi’s innovative merchant-focused solutions enhance your
                success by transforming your business. Open your doors to an
                entire city and see your reach and revenue grow.
              </p>
              <p className="th-14 th-grey">
                We will send you a link, open it on your phone to download the
                app
              </p>
              <Row className="pb-3">
                <Col>
                  <input
                    className="h-100 w-100 px-3"
                    placeholder="Mobile Number"
                  />
                </Col>
                <Col>
                  <Button className="th-btn-primary th-medium w-100 th-16 px-4">
                    Share App Link
                  </Button>
                </Col>
              </Row>
              <p className="th-14 th-grey mb-0">Download app from</p>
              <div className="">
                <span className="pr-3">
                  <button className="th-btn-primary-ghost">
                    <Image className="th-playStore-btn" src={playStore} />
                  </button>
                </span>

                <button className="th-btn-primary-ghost">
                  <Image className="th-appStore-btn" src={appStore} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Store Merchants End */}

        {/* Get App Section Start */}
        <div className="">
          <Image className=" w-100" src={footerBackdrop} />
          <div className="th-get-app pb-5">
            <Container className="pb-5">
              <div className="text-center">
                <p className="th-28 th-medium">Book your Early Access</p>
                <p className="th-26 th-grey pb-5">
                  Become the first few to put your hands on the amazing offers
                  and sales lined up especially for you
                </p>
              </div>
              <Row>
                <Col></Col>
                <Col>
                  <input
                    className="h-100 w-100 px-3"
                    placeholder="Mobile Number"
                  />
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
                <i class="fa fa-heart th-28 th-primary" aria-hidden="true"></i>{" "}
                in Himachal
              </p>
            </div>
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
                <Button
                  className="th-btn-primary th-medium th-16"
                  onClick={scrollTop}
                >
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
}
