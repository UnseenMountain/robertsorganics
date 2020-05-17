import React from 'react';
import Fade from 'react-reveal/Fade';

import { Container, Card, CardGroup, Image, Button } from "react-bootstrap"
import "./style.css"
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"

function Home() {

  return (
    <div>
    <div className="back">
      <Container>
        <h1> Welcome to Roberts Organics</h1>
      </Container>
     



      {/* <div className="container"> */}
      <div className="imageContainer">
        <div className="centered">
          <div class="image">
            <Fade left cascade>
              <CardGroup>
                <Card>
                  <Card.Img height="350" variant="top" src="https://grist.files.wordpress.com/2015/11/organic.jpg" />
                  <Link to="/Store">

                    <h2>
                      <Button variant="dark" size="lg">
                        Shop all
                        </Button>
                    </h2>

                  </Link>
                </Card>

                <Card>
                  <Card.Img height="350" variant="top" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/4/9/6/6/4116694-3-eng-GB/EU-launches-electronic-tracking-system-for-organic-imports_wrbm_large.jpg" />
                  <Link to="/Recipes">

                    <h2>
                      <Button variant="dark" size="lg">
                        Recipes
                    </Button>
                    </h2>

                  </Link>
                </Card>

                <Card>
                  <Image height="350" variant="top" src="https://www.moneycrashers.com/wp-content/uploads/2012/01/how-to-eat-organic-on-a-budget-1068x713.jpg" >
                  </Image>
                  <Link to="/Recipes">
                  <h2>
                    <Button variant="dark" size="lg">
                      Seeds
                  </Button>
                  </h2>
                  </Link>
                </Card>

                <Card>
                  <Image height="350" variant="top" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/bakeryandsnacks.com/article/2019/09/26/study-debunks-myth-that-lifestylers-benefit-from-going-gluten-free/10184053-1-eng-GB/Study-debunks-myth-that-lifestylers-benefit-from-going-gluten-free_wrbm_large.jpg" >
                  </Image>
                  <Link to="/Recipes">
                  <h2>
                    <Button variant="dark" size="lg">
                      Gluten free
                  </Button>
                  </h2>
                  </Link>
                </Card>

              </CardGroup>
            </Fade>
          </div>
        </div>
      </div>



<Container>
      <Card>
    <Card.Img width="600" height="200" variant="top" src="https://www.greenqueen.com.hk/wp-content/uploads/2020/02/organic-food-getty-images.jpg" />
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
          
        <Carousel>
          <Carousel.Item bg="light" variant="light">
            <img
              className="d-block w-100"
              src="https://media2.s-nbcnews.com/j/streams/2014/August/140807/1D274906523533-today-couscous-140804.fit-760w.jpg"
              alt="First slide"
              height="400"
              width="200"
              
              />
            <Carousel.Caption>
              <Card className="bg-dark text-white">
                <h3> Quinoa</h3>
                <p>A peruvian organic grain</p>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.edenbrothers.com/store/media/Seeds-Mixes/SVCOX112.jpg"
              alt="Third slide"
              height="400"
              width="200"
              />

            <Carousel.Caption>
              <Card className="bg-dark text-white">
                <h3>Organic Seeds</h3>
                <p>Grow your own plants in your backyard.</p>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0249/0045/products/maca-root_2048x.jpg?v=1388738446"
              alt="Third slide"
              height="400"
              width="200"
              />

            <Carousel.Caption>
              <Card className="bg-dark text-white">
                <h3>Maca powder</h3>
                <p>A plant native to Peru, and is commonly available in powder form or as a supplement.

                Maca root has traditionally been used to enhance fertility and sex drive.

It's also claimed to improve energy and stamina.</p>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>





          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepioneerwoman.com/wp-content/uploads/2017/04/chia-seeds-101-06.jpg?fit=2000%2C1335"
              alt="Third slide"
              height="400"
              width="200"
              />

            <Carousel.Caption>
              <Card className="bg-dark text-white">
                <h3>Chia Seeds</h3>
                <p>Chia seeds are the edible seeds of Salvia hispanica, a flowering plant in the mint family native to Central America, or of the related Salvia columbariae of the southwestern United States and Mexico. Chia seeds are oval and gray with black and white spots, having a diameter around 1 millimetre.</p>
              </Card>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Fade>
     



              </Container>
    </div>
              </div>
  )
}
export default Home