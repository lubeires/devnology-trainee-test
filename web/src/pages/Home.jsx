import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article, Message } from "../components";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [articles, setArticles] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/articles`
      );
      const json = await response.json();

      if (response.ok) setArticles(json);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      {location.state && <Message message={location.state.message} />}
      <div className="card bg-dark-subtle border-dark-subtle mt-2">
        <div className="card-body w-100 d-flex justify-content-center">
          <Link to="/novo" className="btn btn-outline-success">
            <i className="bi bi-file-earmark-plus pe-2"></i>
            Adicionar novo artigo
          </Link>
        </div>
      </div>
      {articles &&
        articles.map((article) => (
          <Article key={article._id} article={article} isSaved={true} />
        ))}
    </div>
  );
};
