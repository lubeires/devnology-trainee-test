import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Form, Error } from "../components";

export const Edit = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/articles/${id}`
      );
      const data = await response.json();
      if (response.ok) setArticle(data);
      else setError(data.error);
    };

    fetchArticle();
  }, [id]);

  return (
    <>
      {article && <Form previousArticle={article} />}
      {error && <Error error={error} />}
    </>
  );
};
