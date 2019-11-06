import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../common/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Header.scss"

export const Header = props => {
  return (
    <div className="navMain">
        <Container>
            <Row>
                <Col xs={4}>
                    <Logo/>
                </Col>
                <Col xs={8}>
                    <nav className="navbar">
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink exact to="/product" activeClassName="active">All Products</NavLink>
                        <NavLink exact to="/faq" activeClassName="active">FAQ</NavLink>
                        <NavLink exact to="/contact" activeClassName="active">Contact</NavLink> 
                        <NavLink exact to="/cart" activeClassName="active"><FontAwesomeIcon icon={faShoppingCart} />Cart</NavLink>
                    </nav>
                </Col>
            </Row>
        </Container>
    </div>
  );
};
