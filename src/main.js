import React from "react";

function Main(props) {
  const { data } = props;

  return (
    <div className="div">
      <div>
        <h3 className="fotoyuceken">{data.copyright}</h3>
      </div>
      <div>
        <img className="nasa-img" src={data.url} alt="nasa picture" />
      </div>
      <div>
        <p className="tarih">{data.date}</p>
      </div>
      <div>
        <p className="konu">{data.explanation}</p>
      </div>
    </div>
  );
}

export default Main;
