import matrivText from "components/Logo/matrivText";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Logo matriv Text", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<matrivText />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds the size and spacing modifiers", () => {
    const tree = renderWithTheme(<matrivText sm spaceLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
