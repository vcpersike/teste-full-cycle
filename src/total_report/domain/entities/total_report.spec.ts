import { TotalReport } from "./total_report";

describe("constructor of users", () => {
  it("should create a user with name", () => {
    let users = new TotalReport({
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
    });
    expect(users.props).toStrictEqual({
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
    });
  });
});
