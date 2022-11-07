import React from "react";
import styled from "styled-components";
import { styled } from "styled-components";
import NewsItem from "./../../../../02.React/project/news-viewer/src/components/NewsItem";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItems = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  console.log(article);
  return (
  <NewsListBlock>
    {urlToImage && (
      <div className='thumbnail'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlRoImage} alt="thumbnail"/>
        </a>
      </div>
    )};
    <div className='contents'>
    <h2>
      {/*noopener noreferrer: 새 창으로 링크를 띄울 씨 보안 취약점 방지, 성능 향상*//}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h2>
    <div>
    <p>{desctiption}</p>
    </div>
  </NewsListBlock>
};

export default NewsItems;
