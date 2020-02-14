import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../common/Logo/Logo';
import NavBar from '../../features/NavBar/NavBarContainer'

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
                    <NavBar />
                </Col>
            </Row>
        </Container>
    </div>
  );
};
