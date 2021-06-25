import { AuthenticationError } from '@vtex/api'

import { queries } from '../../resolvers/schemas'

jest.mock('ramda')

const schemasMock = jest.mock('../../__mocks__/schemas')

describe('schema', () => {
  it('should call schema success', async () => {
    // arrange
    const token = 'mockToken'

    const context = {
      cookies: {
        get: jest.fn().mockImplementation(() => token),
      },
      clients: {
        schemas: {
          list: jest
            .fn()
            .mockImplementation(() => Promise.resolve({ schema: schemasMock })),
        },
      },
    } as any

    // act
    const schemas = await queries.schema({}, {}, context)

    // assert
    expect(context.clients.schemas.list).toHaveBeenCalled()
    expect(schemas).toMatchObject(schemasMock)
  })

  it('should call schema and get error without token', async () => {
    // arrange

    const context = {
      cookies: {
        get: jest.fn(),
      },
      clients: {
        schemas: {
          list: jest.fn(),
        },
      },
    } as any

    // act
    await expect(queries.schema({}, {}, context))
      // assert
      .rejects.toThrow(new AuthenticationError('User is not logged in'))
  })
})
