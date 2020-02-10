import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Link } from "react-router-dom";

import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import './SingleProduct.scss';

const styles = {
  transition: "all 1s ease-out"
};

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1
    };
    this.onScale = this.onScale.bind(this);
  }

  onScale() {
    this.setState({
      scale: this.state.scale > 1 ? 1 : 1.5
    });
  }

  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }

  handleAddToCart = () => {
    const { products, cart, addToCart, addItemQuantity,  match } = this.props;
    const isInCart = cart.filter(product => product.id === match.params.id);

      if(isInCart.length === 0) {
        alert("Go to cart to see added item(s) or countinue shopping");
        addToCart(products);
    } else {
        addItemQuantity(match.params.id);
    };

  }

  render() {
    const { products, request } = this.props; 
    const { onScale } = this;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         products.length > 0 ? (
        <div className="fullCol">
          <Col className="product-summary idTwo" xs={6}>
            <Card >
              <CardBody>
                <CardTitle>{products[0].name}</CardTitle>
                <CardText>€{products[0].price}</CardText>
              </CardBody>
              <CardImg 
                src={products[0].picture.src} 
                alt="pic" className="product-img"
                style={{ ...styles, transform: "scale(" + this.state.scale + ")" }}
              />
              <Button variant="primary" >
                <Link to={`/cart`}>Go to cart</Link>
              </Button>
              <Button variant="primary" onClick={onScale} className="scaleBtn">
                Zoom product
              </Button>
            </Card>
          </Col>
          <Col className="product-summary idTwo" xs={6}>
            <div className="textPro">{products[0].text}</div>
            <Button variant="primary" onClick={this.handleAddToCart} >
                Add to cart
            </Button>
          </Col>
        </div>   
        
              
      ) : ( 
        <Alert variant="info"> No products!!! </Alert>
      )) : ( 
        <Alert variant="error"> {request.error} </Alert>
      );

      return (
      <div> 
        {textin} 
      </div>
    );
  }

};

SingleProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand:PropTypes.string.isRequired,
      model:PropTypes.string.isRequired,
      picture: PropTypes.object.isRequired,
      price: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ),
  loadProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  addItemQuantity: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};


export default withRouter(props => <SingleProduct {...props} />);