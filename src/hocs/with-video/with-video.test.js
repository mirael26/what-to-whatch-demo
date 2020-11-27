import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import {films} from "../../test-mocks";

import withVideo from "./with-video";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`Should withVideo render correctly`, () => {
  const noop = () => {};
  const film = films[1];
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      poster={film.poster}
      previewVideoSrc={film.previewVideoSrc}
      onVideoMouseOver={noop}
      onVideoMouseOut={noop}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
