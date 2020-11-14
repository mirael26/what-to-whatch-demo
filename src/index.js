import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchFilmsList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import rootReducer from "./store/reducers/root-reducer";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";

const api = createAPI(
    () => store.dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.NO_AUTH))
);

const promoFilm = films[0];

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(checkAuth()),
])
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


