/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthenticationError } from '@vtex/api'
import { difference, find, prop, propEq, reduce } from 'ramda'
import Maybe from 'graphql/tsutils/Maybe'

import { DataEntitySchema } from '../../clients/schemas'
import { defaultFields } from '../../utils'
import { SCHEMA_NAME } from '../../utils/constants'
import { SchemaResponse } from '../../typings/schema-response'

export const queries = {
  schema: async (_: unknown, __: unknown, ctx: Context): Promise<SchemaResponse> => {
    const {
      clients: { schemas },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    const dataEntitySchema: Maybe<DataEntitySchema> = await schemas
      .list(vtexIdToken)
      .then(find<DataEntitySchema>(propEq('name', SCHEMA_NAME)))

    return dataEntitySchema?.schema as SchemaResponse
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
