import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const promoInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App
      films={films}
      reviews={reviews}
      promoTitle={promoInfo.title}
      promoGenre={promoInfo.genre}
      promoReleaseDate={promoInfo.releaseDate}
    />,
    document.querySelector(`#root`)
);
