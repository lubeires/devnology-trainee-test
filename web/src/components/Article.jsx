import { Link, useNavigate } from "react-router-dom";

export const Article = ({ article, isSaved }) => {
  const navigate = useNavigate();

  const deleteArticle = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/articles/${article._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    window.location.reload();
    navigate("/", { state: { message: data.message } });
  };

  return (
    <div className="card bg-dark-subtle border-dark-subtle mt-2">
      <div className="card-body w-100 d-flex align-items-center justify-content-between">
        <img
          className="flex-grox-0"
          src={`https://www.google.com/s2/favicons?domain=${article.url}&sz=32`}
          alt="favicon"
        />
        <a
          href={article.url}
          className="h5 text-success"
          target="_blank"
          rel="noreferrer"
        >
          {article.label}
        </a>
        {isSaved ? (
          <div>
            <Link to={`editar/${article._id}`}>
              <i className="bi bi-pencil text-warning btn"></i>
            </Link>
            <i
              className="bi bi-trash3 text-danger btn"
              onClick={deleteArticle}
            ></i>
          </div>
        ) : (
          <button className="btn btn-outline-success">salvar</button>
        )}
      </div>
    </div>
  );
};
