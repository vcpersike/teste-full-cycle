import UniqueEntityId from "@seedwork/domain/unique-entity-id";

export type UsersProperties = {
  name: string;
  email: string;
  created_at?: Date;
};
export class Users {
  public readonly id: UniqueEntityId;

  constructor(public readonly props: UsersProperties, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
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