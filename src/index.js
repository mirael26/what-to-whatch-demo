import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const promoFilm = films[0];

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        reviews={reviews}
        promoFilm={promoFilm}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
