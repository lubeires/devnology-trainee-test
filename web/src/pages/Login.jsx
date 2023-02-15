import { useState } from "react";
import { Message } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  return (
    <>
      {/* display error logging in user - if any */}
      {error && <Message message={error} isError={true} />}
      <form
        // log in user
        onSubmit={async (e) => {
          e.preventDefault();
          await login(user);
          if (!error) navigate("/");
        }}
      >
        <h4>Entrar</h4>
        {/* email input */}
        <div className="input-group mb-3 mt-4">
          <span className="input-group-text" id="email">
            Email
          </span>
          <input
            type="email"
            className="form-control"
            aria-label="email do usuário"
            aria-describedby="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        {/* password input */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="password">
            Senha
          </span>
          <input
            type="password"
            className="form-control"
            aria-label="senha do usuário"
            aria-describedby="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {/* submit form */}
        <div className="d-flex align-items-center gap-1 text-small">
          <input
            disabled={isLoading}
            type="submit"
            className="btn btn-outline-success me-3"
            value="Entrar"
          />
          não possui conta?
          <Link to="/registrar" className="link-success">
            cadastrar-se
          </Link>
        </div>
      </form>
    </>
  );
};
