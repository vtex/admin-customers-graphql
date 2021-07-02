import { AuthenticationError } from '@vtex/api'
import { difference, prop, reduce } from 'ramda'

import { defaultFields } from '../../utils'
import { SchemaResponse } from '../../typings/schema'
import { getSchema } from '../../services/schemas'

export const queries = {
  schema: async (
    _: unknown,
    __: unknown,
    ctx: Context
  ): Promise<SchemaResponse> => {
    const {
      clients: { customMasterdata },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return getSchema({ client: customMasterdata })
  },
}

export const fieldResolvers = {
  SchemaResponse: {
    properties: prop('properties'),
    required: prop('required'),
    vIndexed: prop('v-indexed'),
    customFields: ({ properties }: any) => {
      const customFields = difference(Object.keys(properties), defaultFields)

      return reduce(
        (acc, field) => acc.concat({ key: field, value: properties[field] }),
        [] as any,
        customFields
      )
    },
  },
}

export const propertiesFieldResolvers = {
  Properties: {
    rcLastCart: prop('rclastcart'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
    stateRegistration: prop('stateRegistration'),
  },
}
