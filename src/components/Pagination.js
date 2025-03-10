import React, { useEffect, useState } from "react";
import * as grIcons from "react-icons/gr";

import { PRODUCTS_PER_PAGE } from "../constants";
import "../styles/Pagination.css";

const Pagination = ({ totalProducts, onCurrentPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const numOfPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  useEffect(() => {
    onCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination-wrapper">
      <button
        className={currentPage === 0 ? "page disabled" : "page"}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 0 ? true : false}
      >
        <grIcons.GrLinkPrevious />
      </button>
      {[...Array(numOfPages)].keys().map((num, index) => (
        <button
          key={index}
          className={currentPage === num ? "page active" : "page"}
          onClick={() => setCurrentPage(num)}
        >
          {num + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === numOfPages - 1 ? true : false}
        className={currentPage === numOfPages - 1 ? "page disabled" : "page"}
      >
        <grIcons.GrLinkNext />
      </button>
    </div>
  );
};

export default Pagination;
