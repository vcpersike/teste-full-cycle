import { Regions, RegionsProperties } from "regions/domain/entities/regions";

export type ProvincesProperties = {
  regions: {
    props: RegionsProperties;
  };
  province: string;
  lat: string;
  long: string;
};

export class Provinces {
  constructor(public readonly props: ProvincesProperties) {}

  get region() {
    return new Regions(this.props.regions.props);
  }

  get province() {
    return this.props.province;
  }

  get lat() {
    return this.props.lat;
  }

  get long() {
    return this.props.long;
  }
}
