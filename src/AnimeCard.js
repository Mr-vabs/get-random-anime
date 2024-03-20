import React from "react";

const AnimeCard = ({ data }) => {
  return (
    <div className="container">
      <div className="card card-res border-primary my-2">
        <h1 className="card-header">{data.title}</h1>
        <h2 className="card-subtitle list-group-item m-0">
          {data.title_japanese}
        </h2>
        <div className="row">
          <div className="col-lg-auto">
            <img
              className="card-img-top p-1"
              src={data.images.jpg.large_image_url}
              alt={data.title}
              style={{ maxWidth: "720px" }} // Limit image width
            />
          </div>
          <div className="col-lg">
            <div className="card-body">
              {data.background && (
                <>
                  <p className="card-text">{data.background}</p>
                  <hr />
                </>
              )}
              <p className="card-text">{data.synopsis}</p>
            </div>
            <p className="blockquote-footer">
              {Object.entries(data).map(([key, value]) => {
                if (
                  typeof value === "string" &&
                  value.trim() !== "" &&
                  !["title", "title_japanese", "synopsis", "background", "url"].includes(key)
                ) {
                  return (
                    <span key={key}>
                      <strong>{key}</strong>&nbsp;
                      {value}&nbsp;
                    </span>
                  );
                }
                return null;
              })}
            </p>
            <p className="blockquote-footer">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <cite title="Source Title">Source Link</cite>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
