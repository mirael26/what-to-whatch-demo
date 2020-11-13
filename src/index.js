import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {reducer} from "./store/reducer";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchFilmsList} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const promoFilm = films[0];

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.resolve(
    store.dispatch(fetchFilmsList())
)
.then(() => {
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
});


