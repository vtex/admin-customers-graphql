import { prop, difference, reduce } from 'ramda'
import { AuthenticationError } from '@vtex/api'
import { defaultFields } from '../../utils'

export const queries = {
  schema: (_: any, __: any, ctx: Context) => {
    const {
      clients: { schemas },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return schemas.get(vtexIdToken)
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
