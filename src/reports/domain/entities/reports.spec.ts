import { Reports } from "./reports";

describe("constructor of Reports", () => {
  it("should create a report with provinces, regions, lat, and long", () => {
    const reports = new Reports({
      provinces: {
        props: {
          regions: {
            props: {
              name: "Region Name",
              iso: "Region ISO",
            },
          }, // as assertion para garantir a tipagem correta
          province: "Province Name",
          lat: "Latitude",
          long: "Longitude",
        }, // as assertion para garantir a tipagem correta
      },
      cities: [
        {
          name: "City Name",
          date: new Date(),
          fips: 123456,
          lat: "Latitude",
          long: "Longitude",
          confirmed: 100,
          deaths: 50,
          confirmed_diff: 10,
          deaths_diff: 5,
          last_update: new Date(),
        },
      ],
      totalReport: {
        props: {
          date: new Date(),
          last_update: new Date(),
          confirmed: 1426096,
          confirmed_diff: 80995,
          deaths: 81865,
          deaths_diff: 7300,
          recovered: 300054,
          recovered_diff: 23539,
          active: 1044177,
          active_diff: 50156,
          fatality_rate: 0.0574,
        },
      },
    });
    expect(reports.props).toStrictEqual({
      provinces: {
        props: {
          regions: {
            props: {
              name: "Region Name",
              iso: "Region ISO",
            },
          },
          province: "Province Name",
          lat: "Latitude",
          long: "Longitude",
        },
      },
      cities: [
        {
          name: "City Name",
          date: expect.any(Date),
          fips: 123456,
          lat: "Latitude",
          long: "Longitude",
          confirmed: 100,
          deaths: 50,
          confirmed_diff: 10,
          deaths_diff: 5,
          last_update: expect.any(Date),
        },
      ],
      totalReport: {
        props: {
          confirmed: 1000,
          deaths: 500,
          recovered: 100,
        },
      },
    });
  });
});
