import { AuthenticationError } from '@vtex/api'

import { queries } from '../../resolvers/users'

const usersMock = jest.mock('../../__mocks__/users')

describe('users', () => {
  it('should call users success', async () => {
    // arrange
    const token = 'mockToken'
    const params = { filter: 'filter', pageNumber: 0, perPage: 10 }

    const context = {
      cookies: {
        get: jest.fn().mockImplementation(() => token),
      },
      clients: {
        users: {
          get: jest.fn().mockImplementation(() => usersMock),
        },
      },
    } as any

    // act
    const users = await queries.users({}, params, context)

    // assert
    expect(context.clients.users.get).toHaveBeenCalledWith(
      params.filter,
      params.perPage,
      params.pageNumber,
      token
    )
    expect(users).toHaveLength(17)
  })

  it('should call users and get error without token', async () => {
    // arrange

    const params = { filter: 'filter', pageNumber: 0, perPage: 10 }

    const context = {
      cookies: {
        get: jest.fn(),
      },
      clients: {
        users: {
          getTotalNumber: jest.fn(),
        },
      },
    } as any

    expect(() =>
      // act
      queries.users({}, params, context)
    )
      // assert
      .toThrow(new AuthenticationError('User is not logged in'))
  })
})

describe('totalNumberOfUsers', () => {
  it('should call get total number success', async () => {
    // arrange
    const token = 'mockToken'
    const params = { filter: '' }

    const context = {
      cookies: {
        get: jest.fn().mockImplementation(() => token),
      },
      clients: {
        users: {
          getTotalNumber: jest.fn().mockImplementation(() => 1),
        },
      },
    } as any

    // act
    const totalNumberOfUsers = await queries.totalNumberOfUsers(
      {},
      params,
      context
    )

    // assert
    expect(context.clients.users.getTotalNumber).toHaveBeenCalledWith(
      params.filter,
      token
    )
    expect(totalNumberOfUsers).toBe(1)
  })

  it('should call get total number and get error without token', async () => {
    // arrange
    const context = {
      cookies: {
        get: jest.fn(),
      },
      clients: {
        users: {
          getTotalNumber: jest.fn(),
        },
      },
    } as any

    expect(() =>
      // act
      queries.totalNumberOfUsers({}, { filter: '' }, context)
    )
      // assert
      .toThrow(new AuthenticationError('User is not logged in'))
  })
})
