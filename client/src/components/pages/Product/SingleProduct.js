import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
  import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';


class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }

  render() {
    const { products, request } = this.props;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         products.length > 0 ? (
             
        <Col className="product-summary" xs={12}>
            <Card>
                <CardBody>
                    <CardTitle>{products[0].name}</CardTitle>
                    <CardText>{products[0].price}</CardText>
                </CardBody>
                <CardImg src={products[0].picture.src} alt="pic" className="product-img"/>
                <Button variant="primary">
                    Add to cart
                </Button>
            </Card>
        </Col> 
              
      ) : ( 
        <Alert variant="info"> No products!!! </Alert>
      )) : ( 
        <Alert variant="error"> {(request.error).toString()} </Alert>,
        console.log(request.error)
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
        price: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};


export default withRouter(props => <SingleProduct {...props} />);