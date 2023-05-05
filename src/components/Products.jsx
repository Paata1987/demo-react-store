import React, { useEffect, useState } from "react";
import { fetchProducts } from "../service/api";
import Product from "./Product";

const Products = (props) => {
  const { isDarkMode } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row ">
        {products.map((product) => {
          return (
            <Product
              isDarkMode={isDarkMode}
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              rate={product.rating.rate}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
