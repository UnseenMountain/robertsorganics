import React from 'react';
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import "./style.css"

function Footer() {

    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <div className="color">
                    <Card.Body>

                        <Card.Title>Roberts Organics</Card.Title>
                        
                        <Row>
                            <Col>Contact us
                                <h6>robert@organics.com</h6>
                                <h6>Phone Number: 805-296-9158</h6>
                                <h6>Paso Robles CA 93446</h6>

                            </Col>
                            <Col> 
                            <Card.Text>
                            Find us on
                    </Card.Text>
                    <div className="pad">
                            <Button variant="primary" href="https://twitter.com/explore">
                                <Image height="60" width="60" src="data:image/jpeg;base64,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" roundedCircle />
                            </Button>

                            <Button variant="primary" href="https://www.facebook.com/">
                                <Image height="60" width="60" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///+5w95GarM2YK80Xq+pttc+ZbFfe7s6YrCHmsmZqdA8Y7Ds8PdSdLlffr3V3OyQpNFrh8Lg5vIvW633+fyCmsxKb7fG0eier9WtutnAy+Ta4e91jsR8k8eMn8zP1ulvh8Dx9PkmVqvo7ff2SOu1AAAEYklEQVR4nO3da3uqOBSG4YDBmDYkHEStp1qn//83jqfuvWemoxGarBWu9/myP9XNfS0sIJGK7FpZ1Y0VY8k2dVXeZOL6T+6kNtTb9YMZLV3+h7B1cky8a0a69ktYWU29OUHStroKWzu+AV4ztr0I3TgneE67szCX1NsRMJlnonRj3UfPGVeKaswjPA2xEvV434XndC2aMe+kp920EeM5Vfu+sfsQQgghhBBCCCGEEPJJKWOM1lpKfc5cUkoo6g37mbQshG12+8XLe/1+6mWx3+8+GjezSyXnRXESq1SpyuhiPlmsq21bHrvudrc667ruWJafn227rQ6b9euisUWStySUFM3r6pfrfq/pEc18Oa2OfryzMLW7Lnry4Tu9JGeoin31DC+1GSrjDk/NL7UZmsn0aV9SM5R2+7wvoRmq4q3HABMSnoC9fMnspWqy6glMZIbKbPoCU5lhf2AaMyym/YFJzFDXA4ApzNA0/qfZSc5QyWfPRFOboR7yJkxBaNygfTSBvXTe+1CfyAyNGwjkPkOlhv2a4T9Ds+t3QZHODE0+FMh8hmo5eITMZygHna+lMEPZ63OLhITGlY8FD4Wc91LZ95OLfwgZz1ANufD9LWQ8Q2U/f0LIeIZm9gSk267y9Xo9/XfrD8bfFtELX95xs58tJ0rLb2IMFIXnCU05nRQmyRvbc7+jYTXTCeIuSa9r343ivB/eb+kjLJfpAk3jc9q9Y3wweJTZewhXyS4nEZ4XFu8Jj1Do18fA0iY8Qq/z7kNBvZVD8rkfM01aKNceb0PGFw6P8zlpS/tL2D7C2eiFSf8q9RIuqTdyUD7CCfVGDgpCCPkHIYT8gxBC/kEIIf8ghJB/EELIv1EI1Xc33r/6y0NoinuvcIr4E2Pl/rt24o88bnLf+/FLb7RE/fLYMLDP+diFK9pbNxGEa9o7qBGExKvaIghfxi7sdrQ3p8ILqR9FHl7YEt9+Cy+sJmMXHoiX24QX5sRrNcIL30Y/wz3xSobwQuq/WxFeSOuLIOxor50iCNvRCzfUC/uCC8mXLgYX1tQriIMLqQ+HwYUd+eLM0MLSUS9dDC3cki/ODC08EF8dhhduqN+GwYXEH5ZGENJ/BTiwsCM/HAYXkh8OQwuP9OvcQwupz7uDC7fUV4cn4XtQIfG9w3Nq6Wb/n/V4ZsS9n59x+LuG6l5zj5UKwtx5AWrdw0ax2uRuEELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8g/EEh0bMJogmtIHrMSyyhaURN8zCiWEJdi4rmgVKxhLISRA82jyQ0rhRZTjLESEKZZyLrHMU7MY5Qu+wkzFpLsJ9GERrbXoRZZeNPMYZQ2yq7CrPWydhjDC800rXZlzDrcid1VGRgodHS3f4HcXu1sqqbmCdwYYW2qavy9ip/A3YKUMidEST2AAAAAElFTkSuQmCC" roundedCircle />
                            </Button>

                            <Button variant="primary" href="https://www.facebook.com/">
                                <Image height="60" width="60" src="https://www.pngkey.com/png/detail/473-4731664_instagram-logo-facebook-icon-sticker-png.png" roundedCircle />
                            </Button>
                        </div></Col>
                        </Row>
                    </Card.Body>
                </div>
                       <Card.Footer>Copyrighted 2020 RobertOrganics. All Rights Reserved</Card.Footer>



            </Card>

        </div>
    );
}


export default Footer
