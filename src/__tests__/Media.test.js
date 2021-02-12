import React from "react";
import Media from "../components/Media";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);
const id = 45;

test("Media with location props equals to /Home and has a link of an image", () => {
  const imgUrl =
    "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/10/102320_MT_moon-brief_feat-1028x579.jpg";
  const location = "/Home";
  const mediaSnapshot = renderer
    .create(<Media id={id} imgUrl={imgUrl} location={location} />)
    .toJSON();
  expect(mediaSnapshot).toMatchSnapshot();
});

test("Media with location props equals to /Home and has a link of a video", () => {
  const imgUrl = "https://www.youtube.com/embed/6AviDjR9mmo";
  const location = "/Home";
  const mediaSnapshot = renderer
    .create(<Media id={id} imgUrl={imgUrl} location={location} />)
    .toJSON();
  expect(mediaSnapshot).toMatchSnapshot();
});

test("Media with no location props", () => {
  const imgUrl =
    "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/10/102320_MT_moon-brief_feat-1028x579.jpg";
  const mediaSnapshot = renderer
    .create(<Media id={id} imgUrl={imgUrl} />)
    .toJSON();
  expect(mediaSnapshot).toMatchSnapshot();
});
