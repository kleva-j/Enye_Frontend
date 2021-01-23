import React, { useState, useContext, useEffect } from "react";
import { debounce, filter } from "lodash";

import { usePagination } from "../../hooks";

import { AppContext } from "../../context/AppContext";

import { SearchForm } from "../searchForm";
import { Pagination } from "../pagination";
import { CardContainer } from "../cardContainer";

import "./container.scss";

export const Container = () => {
  const itemsPerPage = 20;
  const {
    state: {
      loading,
      data: { result },
    },
  } = useContext(AppContext);

  const [list, setList] = useState(result);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearch = debounce((search) => {
    setSearchPhrase(() => search);
  }, 500);

  useEffect(() => {
    const setSearchResult = (newResult) => {
      const keyword = searchPhrase.toLowerCase().trim();
      const searchResult = filter(newResult, (item) => {
        return (
          item.FirstName.toLowerCase().includes(keyword) ||
          item.LastName.toLowerCase().includes(keyword)
        );
      });
      setList(searchResult);
    };
    setSearchResult(result);
  }, [result, searchPhrase]);

  const handleSelect = (param) => {
    Object.keys(param).forEach(
      (key) => (!param[key] || param[key] === undefined) && delete param[key]
    );
    const filteredResult = filter(result, { ...param });
    setList(filteredResult);
  };

  const { slicedData, prevPage, nextPage } = usePagination({
    data: list,
    itemsPerPage,
  });

  return (
    <section className="section_container">
      <h2 className="heading">Users List</h2>
      <SearchForm handleSearch={handleSearch} handleSelect={handleSelect} />
      <CardContainer list={slicedData} loading={loading} />
      <Pagination prevPage={prevPage} nextPage={nextPage} />
    </section>
  );
};
