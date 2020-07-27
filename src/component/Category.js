import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";

export default class Category extends Component {
  render() {
    return (
      <Col md={2} className="text-center">
        <div className="th-icon-bg">
          <Image className="th-icon-img" src={this.props.categoryImage} />
        </div>
        <p className="th-16">{this.props.categoryName}</p>
      </Col>
    );
  }
}
