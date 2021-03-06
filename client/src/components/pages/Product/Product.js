import React from "react";
import { PropTypes } from "prop-types";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import "./Product.scss";

export class Product extends React.Component {
  render() {
    const { id, name, price, picture } = this.props;

    return (
      <Col className="product-summary" xs={12} md={6}>
        <Card>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>€{price}</CardText>
          </CardBody>
          <CardImg src={picture.src} alt="pic" className="product-img" />
          <Button variant="primary">
            <Link className="link-btn" to={`/product/${id}`}>
              Go to product!
            </Link>
          </Button>
        </Card>
      </Col>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.object,
  price: PropTypes.number,
  text: PropTypes.string
};
