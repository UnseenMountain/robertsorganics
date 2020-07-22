import React from 'react';
import { useState } from "react"
import Fade from 'react-reveal/Fade';
import Modal from 'react-bootstrap/Modal'
import { Container, Card, CardGroup, Image, Button, InputGroup, FormControl } from "react-bootstrap"
import "./style.css"

import { Link } from "react-router-dom"

function Organics() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Organic Newsletter no paper needed.</Modal.Title>
        </Modal.Header>
        <h4>Sign up for our newslatter</h4>
        <Modal.Body>  <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup></Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />

        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <div className="back">
          <Container>
            <h1> Welcome to Roberts Organics</h1>
          </Container>


          <Fade left cascade>
            <CardGroup>
              <Card>
                <Image height="350" variant="top" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/4/9/6/6/4116694-3-eng-GB/EU-launches-electronic-tracking-system-for-organic-imports_wrbm_large.jpg" roundedCircle/>
                <Card.Body>
                  <Card.Text>
                    <Link to="/Store">
                      <h2>
                        <Button variant="dark" size="lg">
                          Shop all
                      </Button>
                      </h2>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>


              <Card>
                <Image height="350" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRmo-KkcVbyUsSTWu9lUx5oNoNMKfmH2-WwJPhF1Iy6X0eby1R&usqp=CAU" roundedCircle/>
                <Card.Body>
                  <Card.Text>
                    <Link to="/Recipes">
                      <h2>
                        <Button variant="dark" size="lg">
                          Seeds
                  </Button>
                      </h2>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>


              <Card>
                <Image height="350" variant="top" src="https://cdn.shopify.com/s/files/1/0934/6090/files/non-gmo_large.gif?9751035154982818336"  roundedCircle />
                <Card.Body>
                  <Card.Text>
                    <Link to="/Recipes">
                      <h2>
                        <Button variant="dark" size="lg">
                          Recipes
                      </Button>
                      </h2>
                    </Link>
                  </Card.Text>
                </Card.Body>

              </Card>
              <Card>
                <Image height="350" variant="top" src="https://shelleycase.com/wp-content/uploads/2017/01/gluten-free-icon.png" roundedCircle/>
                <Card.Body>

                  <Card.Text>
                    <Link to="/Recipes">
                      <h2>
                        <Button variant="dark" size="lg">
                          Gluten free
                  </Button>
                      </h2>
                    </Link>
                  </Card.Text>
                </Card.Body>

              </Card>
            </CardGroup>
          </Fade>

          {/* <div className="container"> */}
          {/* <div className="imageContainer">
        <div className="centered">
          <div class="image">
          </div>
        </div>
      </div> */}



          <Container>
            <Card>

              <Card.Body>
                <Card.Text>
                  <div className="card">
                    Our Mission statment:  <h5>We are a organic retail business. </h5>
                    <h5>We are dedicated To providing 100% organic food and seed packets to our coustomers.</h5>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>



            <Fade right cascade>


              <img
                className="d-block w-100"
                src="https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/2011/12-01/best-vegetable-seed-companies/men-dj11-seed-companies-2.jpg"
                alt="Third slide"
                height="500"

              />


              <Card className="bg-dark text-white">
                <h3>Organic Seeds</h3>
                <p>Grow your own plants in your backyard.</p>
              </Card>



              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0249/0045/products/maca-root_2048x.jpg?v=1388738446"
                alt="Third slide"
                height="450"

              />


              <Card className="bg-dark text-white">
                <h3>Maca powder</h3>
                <p>A plant native to Peru, and is commonly available in powder form or as a supplement.

                Maca root has traditionally been used to enhance fertility and sex drive.

It's also claimed to improve energy and stamina.</p>
              </Card>






              <img
                className="d-block w-100"
                src="https://thepioneerwoman.com/wp-content/uploads/2017/04/chia-seeds-101-06.jpg?fit=2000%2C1335"
                alt="Third slide"
                height="600"

              />


              <Card className="bg-dark text-white">
                <h3>Chia Seeds</h3>
                <p>Chia seeds are the edible seeds of Salvia hispanica, a flowering plant in the mint family native to Central America, or of the related Salvia columbariae of the southwestern United States and Mexico. Chia seeds are oval and gray with black and white spots, having a diameter around 1 millimetre.</p>
              </Card>

            </Fade>




          </Container>
        </div>
      </div>
    </div>
  )
}
export default Organics