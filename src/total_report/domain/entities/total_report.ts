export type TotalReportProperties = {
  date: Date;
  confirmed: number;
  deaths: number;
  recovered: number;
  confirmed_diff: number;
  deaths_diff: number;
  recovered_diff: number;
  last_update: Date;
  active: number;
  active_diff: number;
  fatality_rate: number;
};

export class TotalReport {
  constructor(public readonly props: TotalReportProperties) {
  }

  get date() {
    return this.props.date;
  }

  get confirmed() {
    return this.props.confirmed;
  }

  get deaths() {
    return this.props.deaths;
  }
  get recovered() {
    return this.props.recovered;
  }
  get confirmed_diff() {
    return this.props.confirmed_diff;
  }
  get deaths_diff() {
    return this.props.deaths_diff;
  }
  get recovered_diff() {
    return this.props.recovered_diff;
  }
  get last_update() {
    return this.props.last_update;
  }
  get active() {
    return this.props.active;
  }
  get active_diff() {
    return this.props.active_diff;
  }
  get fatality_rate() {
    return this.props.fatality_rate;
  }
}