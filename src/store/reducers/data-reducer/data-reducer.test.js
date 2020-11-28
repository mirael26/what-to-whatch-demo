import {dataReducer} from "./data-reducer";
import {ActionType} from "../../action";
import {films, reviews} from "../../../test-mocks";

const film = films[1];

describe(`Data-reducers should work correctly`, () => {
  it(`Data-reducer without additional parameters should return initial state`, () => {
    expect(dataReducer(void 0, {})).toEqual({
      films: [],
      favoriteFilms: [],
      promoFilm: {},
      currentFilm: {},
      reviews: [],
      genres: [],
    });
  });
  it(`Reducer should update films by loading films`, () => {
    expect(dataReducer({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual({
      films,
    });
  });
  it(`Reducer should update favorite films by loading favorite films`, () => {
    expect(dataReducer({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    })).toEqual({
      favoriteFilms: films,
    });
  });
  it(`Reducer should update genres by getting it from films`, () => {
    expect(dataReducer({
      films: [{genre: `comedy`}, {genre: `action`}],
      genres: [],
    }, {
      type: ActionType.GET_GENRES_LIST,
      payload: null,
    })).toEqual({
      films: [{genre: `comedy`}, {genre: `action`}],
      genres: [`comedy`, `action`]
    });
  });
  it(`Reducer should update promo-film by loading promo-film`, () => {
    expect(dataReducer({
      promoFilm: [],
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    })).toEqual({
      promoFilm: film,
    });
  });
  it(`Reducer should update current film by loading current film`, () => {
    expect(dataReducer({
      currentFilm: [],
    }, {
      type: ActionType.LOAD_CURRENT_FILM,
      payload: film,
    })).toEqual({
      currentFilm: film,
    });
  });
  it(`Reducer should update reviews by loading reviews`, () => {
    expect(dataReducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toEqual({
      reviews
    });
  });
});
