import React from 'react';
import { Container, Col, Card, CardGroup } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import "./style.css"
function Home() {
    return (

        <div>
<Container>
<Col> <Image width="1000" src="https://sc01.alicdn.com/kf/Hc75bfb50682545afbc5498b583aa151eh.jpg" /> </Col>
</Container>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://sc01.alicdn.com/kf/He7f1211b7f51473fa745423a45a58387G.jpg" />
                    </Card>
                    
                    
                    <Card>
                        <Card.Img variant="top" src="https://sc01.alicdn.com/kf/Hf01804f47cd843fab38c6d31dd1b2324S.jpg" />
                    </Card>
                    
                    <Card>
                        <Card.Img variant="top" src="https://sc01.alicdn.com/kf/H754bc8ed1de5449bb6b8febdbb742594W.jpg" />
                    </Card>
                    
                    
                    <Card>
                        <Card.Img variant="top" src="https://sc01.alicdn.com/kf/Hdaab05a03dd145ac8100a3402f84995cK.jpg" />
                        
                    </Card>
                </CardGroup>
                
                <div>
            <Container>

               
                <div>
                    <h1>The Thermalscan20 scans the forehead or hand and alerts by alarm if an elevated skin temperature is
                        detected. An excellent way to provide temperature screening at your place of business.</h1>
                </div>

            </Container>
            <Container>

            <Card>
                <Card.Body className="dis">
                    <h1>Installation:</h1>
                </Card.Body>
            </Card>
            <h4>
                <p> <li> Can be Wall mounted with screws, or with double-sided tape.</li> </p>
                <p> <li> Cost-effective and Lower cost than thermal cameras</li></p>
                <p> <li> Highly accurate</li></p>
                <p> <li> Quick and easy to install</li> </p>
                <p> <li> Alarm function</li> </p>
                <p> <li> Contactless</li> </p>
                <p> <li> Reduces usage of PPE for manual scanning</li> </p>
                <p> <li> Quick automatic measurement </li></p>
                <p> <li> Cost-effective, for Small businesses, Home or Schools. </li> </p> </h4>

            <br></br>
            <Card>
                <Card.Body className="dis">
                    <h1> Key Features: </h1>
                </Card.Body>
            </Card>



            <h3>
                <p><li>Detects surface skin temperature without any PERSONAL contact.</li></p>
                <p><li>Quickly detects surface temperature one second response time.</li></p>
                <p><li>Alarm alerts if the surface skin temperature detected is higher than 99.1˚F (37.3˚C).</li></p>
                <p><li>Digital display.</li></p>
            </h3>

            <div classname="colors">
                <br></br>
                <Card>
                    <Card.Body className="dis">
                        <h1>Specifications: </h1>

                    </Card.Body>
                </Card>
            </div>
            <h3>

                <p><li>Interface:	USB Type C 	5V input</li></p>
                <p><li>Voice prompts	Voice broadcast</li></p>
                <p><li>Detection Method	Close to the sensor</li></p>
                <p><li>Mode:	Celsius / Fahrenheit Switching</li></p>
                <p><li>Speaker:	20-25mm diameter compatible	1W-1.5W</li></p>
                <p><li>ART:  serial ports	Mainboard Communication</li></p>
                <p><li>Product unit weight	10.23 oz. / 290g</li></p>
            </h3>
            </Container>
                </div>
           
        </div>
    )
}

export default Home;