import React from "react";

function Pagination({ paginate, blogPerPage, currentPage, allBlogPage }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allBlogPage / blogPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="flex items-center justify-center space-x-3 overflow-scroll">
        <li>
          <button
            onClick={() => {
              if (currentPage < pageNumber.length) {
                paginate(currentPage - 1);
              }
            }}
          >
            Preview
          </button>
        </li>
        {pageNumber?.map(number => (
          <li
            key={number}
            className={`py-2 px-3 rounded-md border ${
              number === currentPage ? "text-primary border-primary" : ""
            }`}
          >
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              if (currentPage < pageNumber.length) {
                paginate(currentPage + 1);
              }
            }}
          >
            Preview
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
