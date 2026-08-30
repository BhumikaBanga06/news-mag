import { useState, useEffect } from "react";

const Navbar = ({ setCategory, category }) => {
  const [time, setTime] = useState(new Date());
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 992);

  const categories = [
    {
      name: "Tech",
      key: "technology",
    },
    {
      name: "Business",
      key: "business",
    },
    {
      name: "Health",
      key: "health",
    },
    {
      name: "Sports",
      key: "sports",
    },
    {
      name: "Entertainment",
      key: "entertainment",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <div
          style={{
            display: "flex",
            columnGap: "10px",
          }}
        >
          {isCollapsed ? (
            <div className="live-clock">
              <span className="live-dot"></span>
              {time.toLocaleTimeString()}
            </div>
          ) : null}
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
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ul className="navbar-nav">
            {categories.map((catg) => (
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${
                    category === catg.key ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory(catg.key);
                  }}
                >
                  {catg.name}
                </a>
              </li>
            ))}
            {/* <li className="nav-item">
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
                Tech
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
                Business
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
                Health
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
                Sports
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
                Entertainment
              </a>
            </li> */}
          </ul>
          {!isCollapsed ? (
            <div className="live-clock">
              <span className="live-dot"></span>
              {time.toLocaleTimeString()}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
