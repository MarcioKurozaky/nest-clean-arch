import { faker } from '@faker-js/faker'
import { UserProps } from '../../entities/user.entity'

type Props = {
  name?: string
  email?: string
  phoneNumber?: string
  password?: string
  createdAt?: Date
}

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    phoneNumber: props.password ?? faker.phone.number(),
    createdAt: props.createdAt ?? new Date(),
  }
}
