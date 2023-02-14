import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-subtle border-bottom border-dark-subtle">
        <div className="container-fluid">
          {/* link to home page */}
          <Link className="navbar-brand text-success" to="/">
            myTechArticles
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            {user && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* link to home page */}
                  <Link className="nav-link" to="/">
                    salvos
                  </Link>
                </li>
                <li className="nav-item">
                  {/* link to create article page */}
                  <Link className="nav-link" to="/novo">
                    novo
                  </Link>
                </li>
                <li className="nav-item">
                  {/* link to devGo articles page */}
                  <Link className="nav-link" to="/devgo">
                    devGo
                  </Link>
                </li>
              </ul>
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user && (
                <li className="nav-item">
                  {/* logout button */}
                  <button onClick={logout} className="nav-link text-danger btn">
                    sair
                  </button>
                </li>
              )}
              {!user && (
                <>
                  <li className="nav-item">
                    {/* login link */}
                    <Link className="nav-link" to="/entrar">
                      entrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* register link */}
                    <Link className="nav-link" to="/registrar">
                      cadastrar-se
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
