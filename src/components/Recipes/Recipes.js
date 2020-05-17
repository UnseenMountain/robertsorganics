import React from "react"
import Card from 'react-bootstrap/Card'
import {CardGroup, Container} from "react-bootstrap"
import "./style.css"


function Recipes () {
    return(
        <div>
            <h1><iframe width="560" height="315" src="https://www.youtube.com/embed/EMZkTLy7tvc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in.-picture" allowfullscreen></iframe></h1>
<Container>
  <div className="Card">

            <h1>Recipes</h1>

            <CardGroup>
  <Card>
    <Card.Img height="250"  variant="top" src="https://theloopywhisk.com/wp-content/uploads/2018/10/The-Ultimate-Gluten-Free-Chocolate-Cake_730px-featured.jpg" />
    <Card.ImgOverlay>
      <h2>Gluten free</h2>
    </Card.ImgOverlay>
    
  </Card>
  <Card>
    <Card.Img height="250" variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/overhead-view-of-baking-ingredients-and-a-notepad-royalty-free-image-930086476-1546440806.jpg" />
    <Card.ImgOverlay>
      <h2 className="text-white">Sweets</h2>
     
    </Card.ImgOverlay>
    
  </Card>
  <Card>
    <Card.Img height="250" variant="top" src="https://www.washingtonpost.com/resizer/7-gVChh4xgpm5Ykzg9e8aA5RzRA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y2ZKDBOKS45UFJANLPKL7PWOOU.jpg" />
    <Card.ImgOverlay>
      <h2 className="text-white">Breakfast </h2>
      
    </Card.ImgOverlay>
   
  </Card>
 
</CardGroup>
<CardGroup>
<Card>
    <Card.Img height="250" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGzGp_ZC9QDeoQEw5m0S3zYkCzyITWI_Fb58Q3QYH-0pcOkbcq&usqp=CAU" />
    <Card.ImgOverlay>
      <h2 className="text-white">Smoothies </h2>
      
    </Card.ImgOverlay>
   
  </Card>
<Card>
    <Card.Img height="250" variant="top" src="https://previews.123rf.com/images/baibaz/baibaz1701/baibaz170100022/69479374-gluten-free-bread-on-wooden-background-from-top-view.jpg" />
    <Card.ImgOverlay>
      <h2 className="text-white">Breads </h2>
      
    </Card.ImgOverlay>
   
  </Card>
<Card>
    <Card.Img height="250" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy6loignkYBztAKkP0osvxLaDhG3Axj5paKPEF4O7GTt6ajeY2&usqp=CAU" />
    <Card.ImgOverlay>
      <h2 className="text-white">Meat </h2>
      
    </Card.ImgOverlay>
   
  </Card>
</CardGroup>
  </div>
</Container>

        </div>
    )
}

export default Recipes