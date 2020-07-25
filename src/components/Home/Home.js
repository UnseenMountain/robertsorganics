import React from 'react';
import { Container, Col, Card, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import "./style.css"
function Home() {
    return (

        <div>

            <Container>
                <Col>
                    <div >

                        <h1>The Thermalscan20  ThermalScan scans the forehead and alerts by alarm if an elevated skin temperature is
                        detected. An excellent way to provide temperature screening at your place of business.</h1>
                    </div>
                    <Image src="https://sc01.alicdn.com/kf/He7f1211b7f51473fa745423a45a58387G.jpg" />
                </Col>
                <Col> <Image src="https://sc01.alicdn.com/kf/Hdaab05a03dd145ac8100a3402f84995cK.jpg" /></Col>







            </Container>
        </div>
    )
}

export default Home;