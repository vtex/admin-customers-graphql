import { prop } from 'ramda'
import { AuthenticationError } from '@vtex/api'

import { UserResponse } from '../../typings/user'
import { search } from '../../services/users'

export const queries = {
  users: (_: unknown, args: UsersArgs, ctx: Context): Promise<UserResponse> => {
    const {
      clients: { customMasterdata },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

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
