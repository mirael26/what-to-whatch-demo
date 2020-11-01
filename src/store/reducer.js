import {extend} from "../utils";
import {ActionType, GenreTypes} from "../const";
import films from "../mocks/films";


const initialState = {
  genre: GenreTypes.ALL_GENRES,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      let genre = action.payload;
      return extend(state, {
        genre
      });
    case ActionType.GET_FILMS_BY_GENRE:
      genre = action.payload;
      let filmsByGenre = initialState.films;
      if (genre !== GenreTypes.ALL_GENRES) {
        filmsByGenre = films.filter(films.genre === action.payload);
      }
      return extend(state, {
        films: filmsByGenre
      });
  }
  return state;
};

export {reducer};
