import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm, Message } from "../components";
import { useAuth } from "../hooks/useAuth";
import { URI } from "../conf";

export const Edit = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const { id } = useParams();

  useEffect(() => {
    // GET article request
    const fetchArticle = async () => {
      const response = await fetch(`${URI}/api/articles/${id}`, {
        headers: {
          // send authorization token
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (response.ok) setArticle(data);
      else setError(data.error);
    };

    if (user) fetchArticle();
  }, [id, user]);

  return (
    <>
      {/* render form for updating article */}
      {article && <ArticleForm previousArticle={article} />}
      {/* display error finding article - if any */}
      {error && <Message message={error} isError={true} />}
    </>
  );
};
