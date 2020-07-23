import React from 'react';
import { Container, Col, Card, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import "./style.css"
function Home() {
    return (

        <div>
            <Row xs={1} md={2}>
                <Col> <Image height="500" width="500" src="https://images-na.ssl-images-amazon.com/images/I/514aUmfH%2BKL._SL1000_.jpg"  /></Col>
                <Col> <Image height="500" width="500" src="https://tiimg.tistatic.com/fp/1/006/407/wall-mount-medical-infrared-thermometer-351.jpg" /></Col>
            </Row>
            <Container>
            <Col xs={6}>
                <Image height="500" width="1000" src="https://m.media-amazon.com/images/S/aplus-media/sc/ec1d7bf2-f177-464b-891b-2949583bfc23.__CR0,0,970,600_PT0_SX970_V1___.jpg" />
            </Col>

                <Card>

                    <Card.Body>
                        <Card.Text>
                            <div className="card">

                                <h1>The Thermalscan20  ThermalScan scans the forehead and alerts by alarm if an elevated skin temperature is
                                detected. An excellent way to provide temperature screening at your
        place of business.</h1>
                            </div>
                            <br></br>
                            <h3>Installation:
           <li> Can be Wall mounted with screws (included), double-sided tape (included), or on a (tripod NOT Included)</li>
                                <li> • Cost-effective and Lower cost than thermal cameras</li>
                                <li>  Highly accurate</li>
                                <li>
                                    Quick and easy to install
                </li>

                                <li>
                                    Alarm function
                </li>

                                <li>
                                    Contactless
                </li>

                                <li>
                                    Reduces usage of PPE for manual scanning
                </li>

                                <li>
                                    Quick automatic measurement
                </li>

                                <li>
                                    Cost-effective, for Small businesses, Home or Schools.
                </li> </h3>

                            <h3>
                                <div classname="colors">
                                    <br></br>
                Key Features:
            </div>

                                <li> Detects surface skin temperature without any PERSONAL contact</li>
                                <li> Quickly detects surface temperature in less than one second response time</li>
                                <li> Alarm alerts if the surface skin temperature detected is higher than 99.1˚F (37.3˚C)</li>
                                <li> Digital display</li>
                            </h3>
                            <h3>
                                <div classname="colors">
                                    <br></br>
                Specifications:
</div>
                                <li>Temperature Measurement Distance: 2" - 4" (5 - 10 cm) Operating Humidity 95%, non-condensing</li>

                                <li>Temperature Measurement Accuracy: ± 0.4°F (± 0.2°C) Working Temperature 50 - 104°F (10 - 40°C)</li>

                                <li>Testing Temperature Range 32 - 122˚F (0-50°C) Product Weight 0.77lbs (350g)</li>


                                <li>Temperature Measurement: Speed Less than 1 second</li>

                                <li>Product Dimension 6.69" x 4.52" x 5.51" (170 x 115 x 140mm)</li>


                                <li>Abnormal Temperature Alert: Yes</li>

                                <li>Bracket: Wall Mount</li>


                                <li>Working Voltage: USB - DC 5V</li>


                                <li>Power supply included: Rating FCC, RoHS, CE</li>


                                <li>External Power Supply: AC 100/60Hz Warranty 1 Year</li>


                                <li>Power Consumption: Less than 3W</li>
                            </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>



            </Container>
        </div>
    )
}

export default Home;