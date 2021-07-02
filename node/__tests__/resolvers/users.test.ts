import { AuthenticationError } from '@vtex/api'

import { queries } from '../../resolvers/users'
import { search } from '../../services/users'
import usersMock from '../../mocks/users'

jest.mock('../../services/users', () => {
  return {
    search: jest.fn(),
  }
})

describe('users', () => {
  it('should call users success', async () => {
    // arrange
    const token = 'mockToken'
    const params = { filter: 'filter', pageNumber: 1, perPage: 10 }

    const mockService = search as jest.Mock

    mockService.mockImplementation(() => usersMock)

    const context = {
      cookies: {
        get: jest.fn().mockImplementation(() => token),
      },
      clients: {
        customMasterdata: {
          searchDocumentsWithPaginationInfo: jest.fn(),
        },
      },
    } as any

    // act
    const users = await queries.users({}, params, context)

    // assert
    expect(search).toHaveBeenCalledWith({
      client: context.clients.customMasterdata,
      params,
    })
    expect(users).toBeTruthy()
    expect(users.data).toHaveLength(17)
  })

  it('should call users and get error without token', async () => {
    // arrange

    const params = { filter: 'filter', pageNumber: 1, perPage: 10 }

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
