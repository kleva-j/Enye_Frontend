import React from "react";

import "./pagination.scss";

export const Pagination = ({ prevPage, nextPage }) => {
  return (
    <main className="pagination_container">
      <div className="arrowFromRight prev" onClick={prevPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.002"
          height="8.576"
          viewBox="0 0 5.002 8.576"
        >
          <path d="M1.06,8.428a.5.5,0,0,1-.71,0l-.2-.2A.49.49,0,0,1,0,7.868V.708A.49.49,0,0,1,.15.348l.2-.2a.5.5,0,0,1,.71,0l3.79,3.79a.48.48,0,0,1,0,.7Z"></path>
        </svg>
        <span>Prev</span>
      </div>
      <div className="arrowFromLeft next" onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5.002"
          height="8.576"
          viewBox="0 0 5.002 8.576"
        >
          <path d="M1.06,8.428a.5.5,0,0,1-.71,0l-.2-.2A.49.49,0,0,1,0,7.868V.708A.49.49,0,0,1,.15.348l.2-.2a.5.5,0,0,1,.71,0l3.79,3.79a.48.48,0,0,1,0,.7Z"></path>
        </svg>
        <span>Next</span>
      </div>
    </main>
  );
};
