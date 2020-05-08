import React from 'react';
import { Container, Card, CardGroup } from "react-bootstrap"
import "./style.css"
import {Link} from "react-router-dom"
function Home () {
    return(
        <div className="back" >
            <Container>
            <h1> Welcome to Roberts Organics</h1>
            </Container>
            <h5>We are a organic food retail bussiness. </h5>
            <h5>We are dedicated To providing 100% organic food and seed packets to our coustomers.</h5>


            <div className="comp">

            <CardGroup>
  <Card>
  <Link to="/Store">
    <Card.Img  height="350" variant="top" src="https://grist.files.wordpress.com/2015/11/organic.jpg" />
    <Card.Body>
      <Card.Title>Shop all</Card.Title>
    </Card.Body>
     </Link>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  
  <Card>
      <Link to="/Recipes">
    <Card.Img height="350" variant="top" src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/4/9/6/6/4116694-3-eng-GB/EU-launches-electronic-tracking-system-for-organic-imports_wrbm_large.jpg" />
    <Card.Body>
      <Card.Title>Recipes</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
        </Link>
  </Card>
  
  <Card>
    <Card.Img height="350" variant="top" src="https://www.moneycrashers.com/wp-content/uploads/2012/01/how-to-eat-organic-on-a-budget-1068x713.jpg" />
    <Card.Body>
      <Card.Title>Seeds</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>

      
</CardGroup>

                </div >
        </div>
    )
} 

export default Home