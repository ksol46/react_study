//리스트

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItems";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  //api데이터를 불러온다.

  //useEffect: 컴포넌트 렌더링 될 때 실행
  //최초 렌더링 될 때, category의 값이 바뀔 때 실행
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category === "all" ? "" : `${category}`;
        const reponse = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2f4938b7e1d64f9faa9f193035435acf`
        );

        console.log(reponse.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
  }, [category]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = category === "all" ? "" : `${category}`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2f4938b7e1d64f9faa9f193035435acf`
      );
      setArticles(reponse.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  fetchData{();
}, [category]};

if (loading) {
  return <NewsListBlock></NewsListBlock>;
}

//articles의 값이 아직 설정이 안됐을때
if (!articles) {
  return null;
}

  return (
    <NewsListBlock>
      {articles.map((articles)=>(
        <NewsItem key={articles.url} article={article}><NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
