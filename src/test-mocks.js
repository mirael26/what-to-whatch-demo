const films = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.

    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    picture: `https://www.theglobeandmail.com/resizer/ZlZ4o9jXtk_x8e20WPaKO1sFD6I=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/CEK54CW3HZBMXKO3QNV6PHHNEE`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundPicture: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `ffffff`,
    rate: 8.9,
    voteCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    previewVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    isFavorite: true,
  },
  {
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence ,and redemption.`,
    director: `Quentin Tarantino`,
    genre: `Crime`,
    id: 2,
    title: `Pulp Fiction`,
    releaseDate: 1994,
    picture: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    backgroundPicture: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    backgroundColor: `#795433`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    rate: 1.5,
    voteCount: 1635992,
    runTime: 153,
    videoSrc: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.,ogv.360p.webm`,
    isFavorite: false,
  },
  {
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers ,fight to track down a priceless stolen diamond.`,
    director: `Guy Ritchie`,
    genre: `Comedy`,
    id: 13,
    title: `Snatch`,
    releaseDate: 2000,
    picture: `https: //assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    poster: `https: //assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    backgroundPicture: `https: //assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
    backgroundColor: `#FDFDFC`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    rate: 0.2,
    voteCount: 716577,
    runTime: 104,
    videoSrc: `http: //media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoSrc: `https: //upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.,360p.webm`,
    isFavorite: false,
  },
];

const reviews = [
  {
    id: 1,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    rate: 8.9,
    author: `Kate Muir`,
    date: `2016-12-24`,
  },
  {
    id: 2,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    rate: 8.0,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
  },
  {
    id: 3,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    rate: 8.0,
    author: `Amanda Greever`,
    date: `2015-11-18`,
  },
  {
    id: 4,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    rate: 7.2,
    author: `Matthew Lickona`,
    date: `2016-12-20`,
  },
];

const genres = [
  `Action`,
  `Crime`,
  `Drama`,
  `Adventure`,
  `Comedy`,
  `Fantasy`,
  `Thriller`,
];

const userInfo = {
  id: 1,
  email: `capricorn_26@mail.ru`,
  name: `capricorn_26`,
  avatarUrl: `/avatar.jpg`,
};

const match = {
  params: {
    id: 1,
  }
};

export {films, reviews, genres, match, userInfo};
