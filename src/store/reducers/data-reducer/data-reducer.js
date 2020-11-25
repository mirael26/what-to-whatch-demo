import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";

const initialState = {
  films: [],
  favoriteFilms: [],
  promoFilm: {},
  currentFilm: {},
  reviews: [],
  genres: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.GET_GENRES_LIST:
      const genres = state.films.map((film) => film.genre);
      const uniqGenres = [...new Set(genres)];
      return extend(state, {
        genres: uniqGenres.slice(0, 9),
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

export {dataReducer};
