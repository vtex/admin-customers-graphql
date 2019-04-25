import { prop } from 'ramda'

export const queries = {
  getSchema: (_: any, __: any, ctx: Context) => {
    const {
      clients: { schemas },
    } = ctx

    return schemas.getSchema()
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
