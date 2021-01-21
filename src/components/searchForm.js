import React, { createRef } from "react";

import "./searchForm.scss";

export const SearchForm = ({ handleSearch, handleSelect }) => {
  const genderRef = createRef();
  const paymentRef = createRef();

  const handleUpdate = () =>
    handleSelect({
      Gender: genderRef.current.value,
      PaymentMethod: paymentRef.current.value,
    });

  return (
    <form>
      <label htmlFor="searchbar">
        <input
          type="text"
          id="searchbar"
          placeholder="Search user"
          onChange={(event) => handleSearch(event.currentTarget.value)}
        />
      </label>

      <div className="select_filter">
        <select
          name="filter"
          id="filter"
          ref={genderRef}
          onChange={handleUpdate}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer to skip">Prefer To Skip </option>
        </select>
        <select
          name="filter"
          id="filter"
          ref={paymentRef}
          onChange={handleUpdate}
        >
          <option value="">Payment Method</option>
          <option value="check">check</option>
          <option value="money order">money order</option>
          <option value="paypal">paypal</option>
          <option value="cc">cc</option>
        </select>
      </div>
    </form>
  );
};
