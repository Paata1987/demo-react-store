import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
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
          <Carousel.Item
            className={`${styles.carouselItem} w-100 bg-dark`}
            key={card.id}
          >
            <img
              src={card.image}
              className={`d-block ${styles.img}  mx-auto`}
              alt={card.title}
            />
            <Carousel.Caption>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default TheCarousel;
