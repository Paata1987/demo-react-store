import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import TheNavigation from  '../components/TheNavigation'
export default function AboutUs() {
  const carouselItems = [
    {
      imageSrc: 'https://img.freepik.com/premium-photo/christmas-new-years-office-work-space-desktop-flat-lay-white-background_47840-1089.jpg',
      title: 'Our Team',
      description: 'Our team of professionals is always ready to assist you with your selection and provide quality service.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      title: 'Our History',
      description: 'We started our operations in 2005 and have since become one of the leading stores in the industry.',
    },
    {
      imageSrc: 'https://cdn.create.vista.com/api/media/small/208061328/stock-photo-cup-black-coffee-laptop-black',
      title: 'Our Quality',
      description: 'We offer only high-quality products from top manufacturers to meet all the needs of our customers.',
    },
  ];

  return (
    <div>
      <TheNavigation />
      <Container className="py-5 ">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 className="text-center mb-4">About Us</h2>
            <p className="text-center">
              Welcome to our store! We are pleased to offer you a wide range of high-quality products at affordable prices.
              You will find everything you need for your home, office, or business.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <Carousel fade>
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={item.imageSrc} alt={item.title} />
                  <Carousel.Caption>
                    <h3 className="text-primary">{item.title}</h3>
                    <p className="text-secondary">{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
