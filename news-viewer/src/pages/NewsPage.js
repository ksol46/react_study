//페이지만 보여줌. 리스트랑 아이템은 쪼개서 사용

import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";
  console.log(category);

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
