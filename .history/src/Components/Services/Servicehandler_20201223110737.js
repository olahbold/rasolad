import './service.css'
import React from 'react'
import { Container, Row,Col,Image} from 'react-bootstrap'

export default function Servicehandler() {
    return (
        <div>
            <Container fluid>
            <Row>
            <Col className= 'position-relative'>
            <Image src = 'image4.jpg'  alt = ''  width='100%'  height = '200px'  className = 'position-relative'/>
            <h  className = 'position-absolute top-50 start-50 '>  Fabrication</h>
            </Col>

            </Row>




            </Container>
        </div>
    )
}






























