import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Message, Article } from "../components";

export const DevGo = () => {
  const [articles, setArticles] = useState(null);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // GET all devGo articles request
    const fetchArticles = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/devgo`,
        {
          headers: {
            // send authorization token
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setArticles(data);
      } else setError(data.error);
      setIsLoading(false);
    };

    if (user) fetchArticles();
  }, [user]);

  return (
    <>
      {isLoading && <Message message={"Carregando artigos de devGo..."} />}
      {!isLoading && (
        <>
          <h4 className="mb-4">Artigos de devGo</h4>
          {/*display error getting devGo articles */}
          {error && <Message message={error} isError={true} />}
          {articles &&
            // iterate through articles and render the article component for each of them
            articles.map((article) => (
              <Article key={article.url} article={article} isSaved={false} />
            ))}
        </>
      )}
    </>
  );
};
