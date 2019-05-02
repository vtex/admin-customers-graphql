import { prop } from 'ramda'
import { AuthenticationError } from '@vtex/api'

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
  },
}

export const propertiesFieldResolvers = {
  Properties: {
    autoFilter: prop('auto_filter'),
    rcLastCart: prop('rclastcart'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
    stateRegistration: prop('stateRegistration'),
  },
}
