import { Regions } from "./regions";

describe("constructor of Provinces", () => {
  it("should create a province with regions, name, lat, and long", () => {
    const provinces = new Regions({
      name: "Region Name",
      iso: "Region ISO",
    });
    expect(provinces.props).toStrictEqual({
      name: "Region Name",
      iso: "Region ISO",
    });
  });
});
