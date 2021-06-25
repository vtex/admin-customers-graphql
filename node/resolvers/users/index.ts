import { prop } from 'ramda'
import { AuthenticationError } from '@vtex/api'

import { User } from '../../typings/user'

export const queries = {
  users: (_: any, args: UsersArgs, ctx: Context): Promise<User[]> => {
    const { filter, perPage, pageNumber } = args
    const {
      clients: { users },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return users.get(filter, perPage, pageNumber, vtexIdToken)
  },
  totalNumberOfUsers: (_: any, args: { filter: string }, ctx: Context) => {
    const { filter } = args
    const {
      clients: { users },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return users.getTotalNumber(filter, vtexIdToken)
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
