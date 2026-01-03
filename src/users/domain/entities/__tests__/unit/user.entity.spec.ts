import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    // Gera dados falsos para o usuário
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  // ================= CONSTRUCTOR =================
  it('should initialize with correct props', () => {
    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.phoneNumber).toEqual(props.phoneNumber)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  // ================= GETTERS =================
  it('should return the name', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it('should return the email', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it('should return the phoneNumber', () => {
    expect(sut.phoneNumber).toBeDefined()
    expect(sut.phoneNumber).toEqual(props.phoneNumber)
    expect(typeof sut.phoneNumber).toBe('string')
  })

  it('should return the password', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it('should return the createdAt', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  // ================= UPDATE =================
  it('should update the name', () => {
    sut.update({ name: 'Marcio Updated' })
    expect(sut.name).toEqual('Marcio Updated')
  })

  it('should update the password', () => {
    sut.update({ password: 'novaSenha' })
    expect(sut.password).toEqual('novaSenha')
  })

  it('should update the phone number', () => {
    sut.update({ phoneNumber: '987654321' })
    expect(sut.phoneNumber).toEqual('987654321')
  })

  it('should update multiple fields at once', () => {
    sut.update({
      name: 'Novo Nome',
      phoneNumber: '999999999',
      password: 'novaSenha',
    })

    expect(sut.name).toEqual('Novo Nome')
    expect(sut.phoneNumber).toEqual('999999999')
    expect(sut.password).toEqual('novaSenha')
  })
})
