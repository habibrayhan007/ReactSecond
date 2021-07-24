import React from 'react'
import '../../CSS/Main.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                    
                        <ul className="menu">
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
