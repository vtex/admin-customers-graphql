import { prop } from 'ramda'

export const queries = {
  getUsers: (_: any, args: any, ctx: Context) => {
    const { filter, perPage, pageNumber } = args
    const {
      clients: { users },
    } = ctx
    return users.getUsers(filter, perPage, pageNumber)
  },
}

export const fieldResolvers = {
  User: {
    rcLastCart: prop('rclastcast'),
    rcLastCartValue: prop('rclastcar'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
    cartTag: prop('carttag'),
    checkoutTag: prop('checkouttag'),
    corporateDocument: prop('corporateDocument'),
    autoFilter: prop('auto_filter'),
  },
}
