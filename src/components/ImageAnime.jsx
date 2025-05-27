import React from "react";
import airbnb from "../assets/airbnb.png";
import asana from "../assets/asana.png";
import dropbox from "../assets/dropbox.png";
import khan_academy from "../assets/khan_academy.png";
import neipal from "../assets/neipal.png";
import netflix from "../assets/netflix.png";
import pinterest from "../assets/pinterest.png";
import whasapp from "../assets/whasapp.png";

import { Container, Row, Col, Card } from "react-bootstrap";
export default function ImageAnimation() {
  return (
    <>
      <Container className="my-5 bi-relative bi-z-10 bi-h-full bi-container bi-mx-auto  bi-bg-black-500/50 bi-shadow-lg bi-shadow-blue-500/50 bi-backdrop-blur bi-flex bi-items-center bi-justify-center bi-p-10">
        <Row className="d-flex justify-content-center ">
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={airbnb} alt="airbnb" />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-red-500 bi-via-yellow-500 bi-to-green-500 ">
                  AIRBNB
                </Card.Title>
                <Card.Text>This is a description for image 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={asana} />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-green-500 bi-via-yellow-500 bi-to-red-500">
                  ASANA
                </Card.Title>
                <Card.Text>This is a description for image 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={dropbox} />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-blue-500 bi-via-purple-500 bi-to-pink-500">
                  DROPBOX
                </Card.Title>
                <Card.Text>This is a description for image 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={airbnb} alt="airbnb" />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-red-500 bi-via-yellow-500 bi-to-green-500 ">
                  AIRBNB
                </Card.Title>
                <Card.Text>This is a description for image 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={asana} />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-green-500 bi-via-yellow-500 bi-to-red-500">
                  ASANA
                </Card.Title>
                <Card.Text>This is a description for image 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card">
            <Card className="text-center">
              <Card.Img variant="top" src={dropbox} />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-blue-500 bi-via-purple-500 bi-to-pink-500">
                  DROPBOX
                </Card.Title>
                <Card.Text>This is a description for image 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 bi-relative bi-z-10 bi-h-full bi-container bi-mx-auto  bi-bg-black-500/50 bi-shadow-lg bi-shadow-blue-500/50 bi-backdrop-blur bi-flex bi-items-center bi-justify-center bi-p-10">
        <Row className="mt-4 d-flex justify-content-center flex-wrap">
          <Col md={4} className="animated-card2">
            <Card className="text-center">
              <Card.Img variant="top" src={khan_academy} alt="khan_academy" />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-purple-500 bi-via-blue-500 bi-to-green-500">
                  KHAN ACADEMY
                </Card.Title>
                <Card.Text>This is a description for image 4.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card2">
            <Card className="text-center">
              <Card.Img variant="top" src={neipal} alt="neipal" />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-yellow-500 bi-via-orange-500 bi-to-red-500">
                  NEIPAL
                </Card.Title>
                <Card.Text>This is a description for image 5.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animated-card2">
            <Card className="text-center">
              <Card.Img variant="top" src={netflix} alt="netflix" />
              <Card.Body>
                <Card.Title className="bi-bg-gradient-to-r bi-from-red-500 bi-via-yellow-500 bi-to-green-500">
                  NETFLIX
                </Card.Title>
                <Card.Text>This is a description for image 6.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
}
