import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default App;
