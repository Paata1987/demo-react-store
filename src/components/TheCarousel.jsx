import { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import styles from "../styles/TheCarousel.module.css";
import { fetchProducts } from "../service/api";
import ProductModal from "./ProductModal";

const TheCarousel = () => {
  const [randomCards, setRandomCards] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();

      const randomIndexes = getRandomIndexes(data.length, 8);
      const randomCards = data.filter((_card, index) =>
        randomIndexes.includes(index)
      );

      setRandomCards(randomCards);
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomIndexes = (max, count) => {
    const indexes = new Set();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * max));
    }
    return Array.from(indexes);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShow(true);
    //console.log("Product =>", product);
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
                    onClick={() => handleProductClick(card)}
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
      {selectedProduct && (
        <ProductModal
          onHide={handleClose}
          showModal={show}
          title={selectedProduct.title}
          description={selectedProduct.description}
          price={selectedProduct.price}
          rate={selectedProduct.rate}
          img={selectedProduct.image}
        />
      )}
    </>
  );
};

export default TheCarousel;
