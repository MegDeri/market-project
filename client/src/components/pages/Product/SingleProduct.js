import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Link } from "react-router-dom";

import { Col, Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
      scale: 1,
      modal: false,
    };
    this.onScale = this.onScale.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
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
        addToCart(products);
    } else {
        addItemQuantity(match.params.id);
    };
    
    this.toggle();

  }

  render() {
    const { products, request } = this.props; 
    const { onScale } = this;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         products.length > 0 ? (
        <div className="fullCol">
          <Col className="idTwo" xs={6}>
            <Card >
              <CardBody className="card-single">
                <CardTitle>{products[0].name}</CardTitle>
                <CardText>€{products[0].price}</CardText>
              </CardBody>
              <CardImg 
                src={products[0].picture.src} 
                alt="pic" 
                className="img-single"
                style={{ ...styles, transform: "scale(" + this.state.scale + ")" }}
              />
              <Button variant="primary" onClick={onScale} className="scaleBtn">
                Zoom product
              </Button>
            </Card>
          </Col>
          <Col className="idTwo" xs={6}>
            <div className="textPro">{products[0].text}</div>
            <Button variant="primary" onClick={this.handleAddToCart} >
                Add to cart
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader  className="link-btn" toggle={this.toggle}>Item(s) added to the cart!</ModalHeader>
                  <ModalBody>
                     Your item is in the cart, to see, click button below or continue shopping!
                  </ModalBody>
              <ModalFooter>
                  <Button variant="primary" onClick={this.toggle}>
                    <Link className='link-btn' to={`/cart`}>Go to cart</Link>
                  </Button>{' '}
                  <Button variant="primary" onClick={this.toggle}>Close</Button>
              </ModalFooter>
            </Modal>
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