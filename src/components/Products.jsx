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
      console.log("vot: ", isDarkMode);
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
