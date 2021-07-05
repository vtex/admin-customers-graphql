import { prop } from 'ramda'

import { UserResponse } from '../../typings/user'
import { search } from '../../services/users'

export const queries = {
  users: (_: unknown, args: UsersArgs, ctx: Context): Promise<UserResponse> => {
    const {
      clients: { customMasterdata },
    } = ctx

    return search({ client: customMasterdata, params: args })
  },
}

export const userResolvers = {
  User: {
    rcLastCart: prop('rclastcast'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
  },
}
