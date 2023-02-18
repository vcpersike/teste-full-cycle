export type RegionsProperties = {
  name: string;
  iso: string;
};


export class Regions {
  constructor(public readonly props: RegionsProperties) {
  }

  get name() {
    return this.props.name;
  }

  get iso() {
    return this.props.iso;
  }
}