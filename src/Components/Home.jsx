import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import R from "../Assests/R.png";
import P from "../Assests/P.png";
import AR from "../Assests/AR.png";
import D from "../Assests/D.png";
import A from "../Assests/A.png";
import B from "../Assests/B.png";
import M from "../Assests/M.png";
import Accordion from "react-bootstrap/Accordion";
import Footerlogo from "../Assests/Footerlogo.png";
import Instagram from "../Assests/Instagram.png";
import Snap from "../Assests/Snap.png";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import websiteLogo from "../Images/websiteLogo.png";
import i18next from "i18next";

import "../style/style.css";
import { withTranslation } from "react-i18next";

import { SliderContent } from "./SliderContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({ t }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <div>
            <img src={websiteLogo} width="170" alt="main_logo" />
          </div>
          <div className="m-auto">
            <Button variant="danger">{t("Text")}</Button>
          </div>

          <div className="d-md-flex d-none">
            <Nav.Link style={{ color: "red", marginRight: "10px" }}>
              {t("Text1")}
            </Nav.Link>

            <Nav.Link style={{ color: "red", marginRight: "10px" }}>
            {t("Text2")}
            </Nav.Link>

            <Nav.Link style={{ color: "red" }}>{t("Text3")}</Nav.Link>
          </div>
          <div>
            <select
              className="language_convert"
              onChange={(e) => i18next.changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center h11">{t("Text4")}</h1>
            <div className="div6"></div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card className="Card programming_second_section">
              <Card.Img className="img1 " src={R} />
              <Card.Body style={{ margin: "0px", padding: "0px" }}>
                <Card.Title className="text-center t1">{t("Text5")}</Card.Title>
                <Card.Text>
                  <p
                    className="text-center"
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    {t("StudentsExperience")}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="Card programming_second_section">
              <Card.Img className=" img1" src={P} />
              <Card.Body>
                <Card.Title className="text-center t1">{t("Text6")}</Card.Title>
                <Card.Text>
                  <p className="text-center">{t("Teaching The Fundemental")}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="Card programming_second_section">
              <Card.Img className=" img1" src={AR} />
              <Card.Body>
                <Card.Title className="text-center">{t("Text7")}</Card.Title>
                <Card.Text>
                  <p className="text-center">{t("Understanding what")}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="starsMission">
          <Col sm={12} md={12} lg={6} xl={6} className="">
            <h1 className="text-center mt-5 h1">{t("Stars Mission")}</h1>
            <p className="P">{t("Welcome to Young Stars")}</p>
          </Col>
          <Col sm={6} md={6} lg={6} xl={6} className="young_image_section">
            <img className="img2 mt-5" src={D} alt="" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5 technical_development">
          <Col sm={12} md={6} lg={6} className="technical_development_1">
            <img className="img3 mt-5 technical_development_1" src={A} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6} className="technical_development_2">
            <h1 className="text-center Text">{t("TechnicalDevelopment")}</h1>
            <p className="P mt-4">{t("Focusing on fun learning")}</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5 technical_development">
          <Col sm={12} md={6} lg={6} className="mental_development mt-3">
            <h1 className="text-left">{t("MentalDevelopment")}</h1>
            <p className="Mental__dev">{t("Modules and tasks")}</p>
          </Col>
          <Col sm={12} md={6} lg={6} className="technical_development_1">
            <img className="img3 mt-5 technical_development_1" src={B} alt="" />
          </Col>
        </Row>
      </Container>

      {/* Testimonials Slider */}
      <Container>
        <Slider {...settings} className="text-center ">
          {SliderContent.map((data) => (
            <Row className="">
              <Col className="programming_slider ">
                <div className="d-flex justify-content-center">
                  <img
                    src={data.image}
                    alt="Icon"
                    width={150}
                    className=""
                    style={{ borderRadius: "100%" }}
                  />
                </div>

                <div className="font-medium text-center text-lg pt-4 pb-10">
                  {t("Slate helps")}
                </div>
                <div className="mt-4">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <h3 className="font-semibold text-2xl pt-4">{t(data.name)}</h3>
              </Col>
            </Row>
          ))}
        </Slider>
      </Container>

      <Container className="techer_section" style={{ marginTop: "70px" }}>
        <Row>
          <h3
            className="text-center font-semibold"
            style={{ color: "#c13645" }}
          >
            {t("Happy teachers and parents")}
          </h3>
          <Col sm={12} md={4} lg={4} className="mt-5">
            <div className="teacher_section">
              {/* <div><video src=""></video></div> */}
              <div className="userName_professional_Section mt-5 pt-4 ">
                <h4 className="text-center">{t("Username")}</h4>
                <p className="text-center">{t("Professional")}</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-5">
            <div className="teacher_section">
              {/* <div><video src=""></video></div> */}
              <div className="userName_professional_Section mt-5 pt-4 ">
                <h4 className="text-center">{t("Username")}</h4>
                <p className="text-center">{t("Professional")}</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-5">
            <div className="teacher_section">
              {/* <div><video src=""></video></div> */}
              <div className="userName_professional_Section mt-5 pt-4 ">
                <h4 className="text-center">{t("Username")}</h4>
                <p className="text-center">{t("Professional")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="Question">
        <Row>
          <Col>
            <h2 className="h3 text-center">{t("Asked Question")}</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="accordion-item1" eventKey="1">
                <Accordion.Header>{t("Raw denim")}</Accordion.Header>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>{t("Williamsburg")}</Accordion.Header>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header class="Raw">
                  {t("Raw denim")}
                </Accordion.Header>
                <Accordion.Body className="body">
                  {t("Anim pariatur")}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>{t("Reprehenderit")}</Accordion.Header>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>{t("Cosby")}</Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <footer
        style={{
          background: "#b4b4b4",
          paddingTop: "40px",
          paddingBottom: "40px",
          marginTop: "150px",
        }}
      >
        <Container>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <div>
                <div>
                  <img className="" src={Footerlogo} width={250} alt="" />
                </div>
                <div className="d-flex justify-content-around">
                  <img width={50} src={Instagram} alt="" />
                  <img width={50} src={Snap} alt="" />
                </div>
              </div>
            </Col>
            <Col
              sm={0}
              md={0}
              lg={9}
              className="d-lg-flex d-none justify-content-around items-content-"
            >
              <Col className="text-center" sm={12} md={12} lg={2}>
                <div style={{ cursor: "pointer" }}>{t("pages")}</div>
                <div style={{ cursor: "pointer" }}>{t("Home")}</div>
                <div style={{ cursor: "pointer" }}>{t("Product")}</div>
                <div style={{ cursor: "pointer" }}>{t("Pricing")}</div>
                <div style={{ cursor: "pointer" }}>{t("About")}</div>
                <div style={{ cursor: "pointer" }}>{t("Contact")}</div>
              </Col>
              <div>
                <div style={{ cursor: "pointer" }}>{t("Tomothy")}</div>
                <div style={{ cursor: "pointer" }}>{t("Elenovr Edwards")}</div>
                <div style={{ cursor: "pointer" }}>{t("Ted Roberston")}</div>
                <div style={{ cursor: "pointer" }}>{t("Annette")}</div>
                <div style={{ cursor: "pointer" }}>{t("Russel")}</div>
                <div style={{ cursor: "pointer" }}>{t("Jinnie Mckinney")}</div>
                <div style={{ cursor: "pointer" }}>{t("Golria Richard")}</div>
              </div>
              <div>
                <div style={{ cursor: "pointer" }}>{t("Jane Black")}</div>
                <div style={{ cursor: "pointer" }}>{t("Philip Jones")}</div>
                <div style={{ cursor: "pointer" }}>{t("Product")}</div>
                <div style={{ cursor: "pointer" }}>{t("Colleen Russell")}</div>
                <div style={{ cursor: "pointer" }}>{t("Marvin Hawkins")}</div>
                <div style={{ cursor: "pointer" }}>{t("Bruce Simmions")}</div>
              </div>
              <div>
                <div style={{ cursor: "pointer" }}>{t("Annette")}</div>
                <div style={{ cursor: "pointer" }}>{t("Jenniee Coppe")}r</div>
                <div style={{ cursor: "pointer" }}>{t("Julie Henry")}</div>
                <div style={{ cursor: "pointer" }}>{t("Johnny Murphy")}</div>
                <div style={{ cursor: "pointer" }}>{t("Gregory Mccoy")}</div>
                <div style={{ cursor: "pointer" }}>{t("Marvin Mckinney")}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default withTranslation()(Home);
