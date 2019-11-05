import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Table, Button } from 'reactstrap';
  
class Cart extends React.Component  {

    render() {
       
        const { products, cart} = this.props;
        console.log("this products are:", products)
        
        return (
            <div>
                <h3>Item(s) in the shopping basket:</h3>
                <Container>
                    <Col xs={12}>
                        <Table striped responsive>
                            <thead className="dark-tableHead">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Picture</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* <ul>{products.cart.map(c => <li key={c.id}>{c.name} | amount {c.amount}</li>)}</ul> */}
                            </tbody>
                        </Table>
                    </Col>
                </Container>
            </div>
        )
   }
}
Cart.propTypes = {
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
    addItemToCart:  PropTypes.func.isRequired,
  };

export default Cart;