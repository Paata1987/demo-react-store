import React, { useEffect, useState } from "react";
import { fetchProducts } from "../service/api";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
      console.log("P=> ", productData);
    };
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="row ">
        {products.map((product) => {
          return (
            <Product
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
