import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App
      promoTitle={promoInfo.title}
      promoGenre={promoInfo.genre}
      promoReleaseDate={promoInfo.releaseDate}
    />,
    document.querySelector(`#root`)
);
