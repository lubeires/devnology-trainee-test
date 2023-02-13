export const Message = ({ message }) => {
  return (
    <div
      className="alert alert-success d-flex justify-content-between"
      role="alert"
    >
      {message}
    </div>
  );
};
