const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light px-2 py-2"
      style={{
        width: "345px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img src={src} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <div>
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "the news is not being displayed due to some error. Please try again later."}
          </p>
        </div>
        <a href={url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
