import renderer from "react-test-renderer";
import React from "react";
import ReactDOM from "react-dom";
import List from "../List";

describe("my component", () => {
  it("renders without crashing", () => {
    const section = document.createElement("section");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<List name="List-cards" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the UI as expected with no unreads", () => {
    const tree = renderer
      .create(<List name="List-cards" unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
