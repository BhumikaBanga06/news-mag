const Navbar = ({ setCategory, category }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  category === "technology" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("technology");
                }}
              >
                tech
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  category === "business" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("business");
                }}
              >
                business
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${category === "health" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("health");
                }}
              >
                health
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${category === "sports" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("sports");
                }}
              >
                sports
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  category === "entertainment" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("entertainment");
                }}
              >
                entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
