import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { Container} from "react-bootstrap"
import Card from 'react-bootstrap/Card'
function Store () {
    return(
        <div>
          <Container>

            <Carousel>
  <Carousel.Item bg="light" variant="light">
    <img
      className="d-block w-100"
      src="https://media2.s-nbcnews.com/j/streams/2014/August/140807/1D274906523533-today-couscous-140804.fit-760w.jpg"
      alt="First slide"
      height="600"
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
      height="600"
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
      height="600"
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
      height="600"
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
      </Container>
        </div>
    )
}

export default Store