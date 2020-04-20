import React from 'react';
import { Container, Form, Button } from "react-bootstrap"
import "./style.css"

function Blog() {
    return (
        <div className="colors">
            <Container>

                <div className="colors">
                    <h1>
                        Roberts Organics
                    </h1>
                </div>
                    
                        <li>
                            sample text
                        </li>
                   
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Large text" />
                    <Button><h6>Submit</h6></Button>
                </Form.Group>
            </Container>
            

        </div>
    );
}


export default Blog