import { Link } from "react-router-dom";

export const Message = ({ message, isError }) => {
  return (
    <div
      className={`alert d-flex justify-content-between ${
        // change alert style according to message type
        isError ? "alert-danger" : "alert-success"
      }`}
      role="alert"
    >
      {message}
      {/* display return link if message is an error */}
      {isError && (
        <Link to="/" className="text-danger">
          voltar
        </Link>
      )}
    </div>
  );
};
