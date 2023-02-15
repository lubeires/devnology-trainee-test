import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Article = ({ article, isSaved }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // PATCH devGo article request
  const saveDevGoArticle = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/articles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // send authorization token
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ ...article }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // goes to home page and send success create/update message
      navigate("/", { state: { message: data.message } });
    }
  };

  // DELETE article request
  const deleteArticle = async () => {
    // check if user is logged in
    if (!user) return;

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/articles/${article._id}`,
      {
        method: "DELETE",
        headers: {
          // send authorization token
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const data = await response.json();

    // reload home page to sync with db and send success delete message
    window.location.reload();
    navigate("/", { state: { message: data.message } });
  };

  return (
    <>
      {/* article display */}
      <div className="card bg-dark-subtle border-dark-subtle mt-2">
        <div className="card-body w-100 d-flex align-items-center justify-content-between">
          <img
            className="flex-grox-0"
            src={`https://www.google.com/s2/favicons?domain=${article.url}&sz=32`}
            alt="favicon"
          />
          <a
            href={article.url}
            className="h5 link-success"
            target="_blank"
            rel="noreferrer"
          >
            {article.label}
          </a>
          {isSaved ? (
            <div>
              {/* link to edit article */}
              <Link to={`editar/${article._id}`}>
                <i className="bi bi-pencil text-warning btn"></i>
              </Link>

              {/* button to delete article */}
              <i
                className="bi bi-trash3 text-danger btn"
                onClick={deleteArticle}
              ></i>
            </div>
          ) : (
            // button to save devGo article
            <button
              className="btn btn-outline-success"
              onClick={saveDevGoArticle}
            >
              salvar
            </button>
          )}
        </div>
      </div>
    </>
  );
};
