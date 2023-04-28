import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Col, Row } from "react-bootstrap";
import styles from "../styles/TheCarousel.module.css";
const TheCarousel = () => {
  const [cards, setCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setCards(response.data);
      const randomIndexes = getRandomIndexes(response.data.length, 10);
      const randomCards = response.data.filter((card, index) =>
        randomIndexes.includes(index)
      );
      setRandomCards(randomCards);
    });
  }, []);

  const getRandomIndexes = (max, count) => {
    const indexes = new Set();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * max));
    }
    return Array.from(indexes);
  };

  return (
    <>
      <Carousel className={styles.carousel}>
        {randomCards.map((card) => (
          <Carousel.Item className={`${styles.carouselItem}  `} key={card.id}>
            <Row>
              <Col className="d-none d-sm-block">
                <Carousel.Caption className={`${styles.caption}  `}>
                  <h3 className="">{card.title}</h3>
                  <p className="d-none d-sm-none d-md-block">
                    {card.description}
                  </p>
                </Carousel.Caption>
              </Col>
              <Col>
                <div className={styles.center}>
                  <img
                    src={card.image}
                    className={` ${styles.img} flex-md-column   `}
                    alt={card.title}
                  />
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default TheCarousel;
