import React, { useEffect, useState } from "react";

import { PRODUCTS_PER_PAGE } from "../constants";

import Card from "./Card";
import Pagination from "./Pagination";
import "../styles/Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const handleCurrentPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json.products);
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="body">
      <Pagination
        onCurrentPage={handleCurrentPage}
        totalProducts={products.length}
      />
      <div className="cards">
        {products.slice(start, end).map((p) => (
          <Card
            key={p.id}
            productName={p.title}
            src={p.thumbnail}
            alt={p.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
