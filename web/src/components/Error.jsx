import { Link } from "react-router-dom";

export const Error = ({ error }) => {
  return (
    <div
      className="alert alert-danger d-flex justify-content-between"
      role="alert"
    >
      {error}
      <Link to="/" className="text-danger">
        voltar
      </Link>
    </div>
  );
};
