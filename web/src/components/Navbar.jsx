import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-subtle border-bottom border-dark-subtle">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  salvos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novo">
                  novo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/devgo">
                  devGo
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-danger">sair</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">entrar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">cadastrar-se</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
