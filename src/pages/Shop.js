import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypesBar'

const Shop = () =>{
    return (
        <Container>
            <Row>
                <Col md={3} className="mt-2">
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Shop