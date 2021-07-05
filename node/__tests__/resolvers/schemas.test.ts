import { AuthenticationError } from '@vtex/api'

import { queries } from '../../resolvers/schemas'
import { getSchema } from '../../services/schemas'
import schemasMock from '../../mocks/schemas'

jest.mock('../../services/schemas', () => {
  return {
    getSchema: jest.fn(),
  }
})

jest.mock('ramda')

describe('schema', () => {
  it('should call schema success', async () => {
    // arrange
    const token = 'mockToken'

    const mockService = getSchema as jest.Mock

    mockService.mockImplementation(() => schemasMock)

    const context = {
      cookies: {
        get: jest.fn().mockImplementation(() => token),
      },
      clients: {
        customMasterdata: {
          getSchema: jest.fn(),
        },
      },
    } as any

    // act
    const schemas = await queries.schema({}, {}, context)

    // assert
    expect(getSchema).toHaveBeenCalledWith({
      client: context.clients.customMasterdata,
    })
    expect(schemas).toMatchObject(schemasMock)
  })
})
