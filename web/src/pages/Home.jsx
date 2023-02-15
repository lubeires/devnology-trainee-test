import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article, Message } from "../components";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
  const [articles, setArticles] = useState(null);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // GET all articles request
    const fetchArticles = async () => {
      const response = await fetch("/api/articles", {
        headers: {
          // send authorization token
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();

      if (response.ok) setArticles(data);
    };

    if (user) fetchArticles();
  }, [user]);

  return (
    <>
      <h4 className="mb-4">Meus artigos salvos</h4>
      {/* display any message send via navigation */}
      {location.state && <Message message={location.state.message} />}
      <div className="card bg-dark-subtle border-dark-subtle mt-2">
        <div className="card-body w-100 d-flex justify-content-center">
          {/* link to create article */}
          <Link to="/novo" className="btn btn-outline-success">
            <i className="bi bi-file-earmark-plus pe-2"></i>
            Adicionar novo artigo
          </Link>
        </div>
      </div>
      {articles &&
        // iterate through articles and render the article component for each of them
        articles.map((article) => (
          <Article key={article._id} article={article} isSaved={true} />
        ))}
    </>
  );
};
