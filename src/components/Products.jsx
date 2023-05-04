import React, { useEffect, useState } from "react";
import { fetchProducts } from "../service/api";

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
    <>
      {products.map((product) => {
        <div>{product.id}</div>;
      })}
    </>
  );
};

export default Products;
