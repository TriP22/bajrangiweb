import React, { Component } from "react";
import icon from "../assets/img/icon.png";
import { Col, Image } from "react-bootstrap";

export default class Category extends Component {
  render() {
    return (
      <Col md={2} className="text-center">
        <div className="th-icon-bg">
          <Image className="th-icon-img" src={icon} />
        </div>

        <p className="th-16">Restaurant</p>
      </Col>
    );
  }
}
