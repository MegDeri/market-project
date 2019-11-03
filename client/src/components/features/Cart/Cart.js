import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Table, Button } from 'reactstrap';
  
class Cart extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
         product: [
            {
            name: 'Magda',
            price:'',
            picture: '',
            amount: 1,
            }
         ]
        };
        
      }

    render() {
        
        const { product } = this.state;
        
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
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.picture}</td>
                                <td>{product.amount}</td>
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
    loadProducts: PropTypes.func.isRequired,
  };

export default Cart;