import React from "react";
import { shallow } from "enzyme";

import NoMatch from "../components/NoMatch";

it("should render NoMatch", () => {
  const comp = shallow(<NoMatch />);
  expect(comp.find("h1").length).toBe(1);
  expect(
    comp
      .find("h1")
      .at(0)
      .childAt(0)
      .text()
  ).toBe("Ooops");
  expect(comp.find("p").length).toBe(1);
  expect(
    comp
      .find("p")
      .at(0)
      .childAt(0)
      .text()
  ).toBe(`Looks like this page doesn't exist`);
});
