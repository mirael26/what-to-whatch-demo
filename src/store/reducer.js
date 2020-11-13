import {extend} from "../utils";
import {GenreTypes} from "../const";
import {ActionType} from "../store/action";
import films from "../mocks/films";


const initialState = {
  genre: GenreTypes.ALL_GENRES,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const newGenre = action.payload;
      if (newGenre === state.genre) {
        return state;
      }
      return extend(state, {
        genre: newGenre
      });
    case ActionType.GET_FILMS_BY_GENRE:
      const activeGenre = action.payload;
      let filmsByGenre;
      if (activeGenre === GenreTypes.ALL_GENRES) {
        filmsByGenre = initialState.films;
      } else {
        filmsByGenre = films.filter((film) =>film.genre === activeGenre);
      }
      return extend(state, {
        films: filmsByGenre
      });
    default:
      return state;
  }
};

export {reducer};
