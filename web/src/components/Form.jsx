import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Error } from "./Error";

export const Form = ({ previousArticle = null }) => {
  const [article, setArticle] = useState(
    previousArticle ? previousArticle : { label: "", url: "" }
  );
  const [error, setError] = useState();

  const navigate = useNavigate();

  const createArticle = () =>
    fetch(`${process.env.REACT_APP_BASE_URL}/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...article }),
    });

  const updateArticle = () =>
    fetch(`${process.env.REACT_APP_BASE_URL}/api/articles/${article._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...article }),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = previousArticle
      ? await updateArticle()
      : await createArticle();

    const data = await response.json();

    if (response.ok) {
      setError(null);
      setArticle({ label: "", url: "" });
      navigate("/", { state: { message: data.message } });
    } else setError(data.error);
  };

  return (
    <>
      {error && <Error error={error} />}
      <form className="container w-75" onSubmit={(e) => handleSubmit(e)}>
        {previousArticle ? <h4>Editar artigo</h4> : <h4>Adicionar artigo</h4>}
        <div className="input-group mb-3 mt-4">
          <span className="input-group-text" id="url">
            Título
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="url do artigo"
            aria-describedby="url"
            value={article.label}
            onChange={(e) => setArticle({ ...article, label: e.target.value })}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="url">
            URL
          </span>
          <input
            type="url"
            className="form-control"
            aria-label="url do artigo"
            aria-describedby="url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-success"
          value={previousArticle ? "Editar" : "Adicionar"}
        />
      </form>
    </>
  );
};
