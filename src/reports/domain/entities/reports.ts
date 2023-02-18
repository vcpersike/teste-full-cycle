import { Provinces, ProvincesProperties } from "provinces/domain/entities/provinces";
import { TotalReport, TotalReportProperties } from "total_report/domain/entities/total_report";


export type ReportProperties = {
  totalReport: {
    props: TotalReportProperties;
  };
  provinces: {
    props: ProvincesProperties;
  };
  cities: [
    {
      name: string;
      date: Date;
      fips: number;
      lat: string;
      long: string;
      confirmed: number;
      deaths: number;
      confirmed_diff: number;
      deaths_diff: number;
      last_update: Date;
    }
  ];
};


export class Reports {
  constructor(public readonly props: ReportProperties) {}

  get totalReport() {
    return new TotalReport(this.props.totalReport.props);
  }

  get provinces() {
    return new Provinces(this.props.provinces.props);
  }
}
