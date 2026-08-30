import Ticker from "./Ticker";
import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center display-4">
        Latest <span className="badge bg-danger ">News</span>
      </h2>
      <style>{`
  .live-clock {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #1a1a1a;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
  .live-dot {
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
  }
`}</style>
      <Ticker titles={articles.map((a) => a.title)} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 10px",
          padding: "10px",
          justifyContent: "center",
        }}
      >
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
