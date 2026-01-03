import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
  name: string
  email: string
  phoneNumber: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  update(
    data: Partial<Pick<UserProps, 'name' | 'phoneNumber' | 'password'>>,
  ): void {
    if (data.name !== undefined) {
      this.props.name = data.name
    }

    if (data.phoneNumber !== undefined) {
      this.props.phoneNumber = data.phoneNumber
    }

    if (data.password !== undefined) {
      this.props.password = data.password
    }
  }

  get name() {
    return this.props.name
  }

  private set name(value: string) {
    this.props.name = value
  }

  get email() {
    return this.props.email
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  private set phoneNumber(value: string) {
    this.props.password = value
  }

  get password() {
    return this.props.password
  }

  private set password(value: string) {
    this.props.password = value
  }

  get createdAt() {
    return this.props.createdAt
  }
}
