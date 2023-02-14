import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Message } from "./Message";

export const ArticleForm = ({ previousArticle = null }) => {
  // create article state and set article if is editing existing article
  const [article, setArticle] = useState(
    previousArticle ? previousArticle : { label: "", url: "" }
  );
  const [error, setError] = useState();
  const { user } = useAuth();
  const navigate = useNavigate();

  // PATCH article request
  const createArticle = () =>
    fetch(`${process.env.REACT_APP_BASE_URL}/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // send authorization token
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...article }),
    });

  // POST article request
  const updateArticle = () =>
    fetch(`${process.env.REACT_APP_BASE_URL}/api/articles/${article._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // send authorization token
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...article }),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // checks if is creating or updating article
    const response = previousArticle
      ? await updateArticle()
      : await createArticle();

    const data = await response.json();

    if (response.ok) {
      // clear error and article states
      setError(null);
      setArticle({ label: "", url: "" });
      // goes to home page and send success create/update message
      navigate("/", { state: { message: data.message } });
    } else setError(data.error);
  };

  return (
    <>
      {/* display error creating/updating article - if any */}
      {error && <Message message={error} isError={true} />}
      <form className="container w-75" onSubmit={(e) => handleSubmit(e)}>
        {/* set header according to the form function */}
        {previousArticle ? <h4>Editar artigo</h4> : <h4>Adicionar artigo</h4>}
        {/* label input */}
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
        {/* url input */}
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
        {/* return to home page */}
        <Link to="/" className="btn btn-outline-secondary me-2">
          Voltar
        </Link>
        {/* submit form */}
        <input
          type="submit"
          className="btn btn-outline-success"
          // set button value according to the form function
          value={previousArticle ? "Editar" : "Adicionar"}
        />
      </form>
    </>
  );
};
