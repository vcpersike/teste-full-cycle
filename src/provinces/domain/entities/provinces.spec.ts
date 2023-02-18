import { Provinces } from "./provinces";

describe("constructor of Provinces", () => {
  it("should create a province with regions, name, lat, and long", () => {
    const provinces = new Provinces({
      regions: {
        props: {
          name: "Region Name",
          iso: "Region ISO",
        },
      },
      province: "Province Name",
      lat: "Latitude",
      long: "Longitude",
    });
    expect(provinces.props).toStrictEqual({
      regions: {
        props: {
          name: "Region Name",
          iso: "Region ISO",
        },
      },
      province: "Province Name",
      lat: "Latitude",
      long: "Longitude",
    });
  });
});
