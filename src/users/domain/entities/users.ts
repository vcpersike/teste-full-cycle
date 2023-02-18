export type UsersProperties = {
  name: string;
  email: string;
  created_at?: Date;
};
export class Users {
  constructor(public readonly props: UsersProperties) {
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get created_at() {
    return this.props.created_at;
  }
}