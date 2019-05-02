import { prop, forEachObjIndexed, map } from 'ramda'
import { AuthenticationError } from '@vtex/api'

export const queries = {
  getUsers: (_: any, args: any, ctx: Context) => {
    const { filter, perPage, pageNumber } = args
    const {
      clients: { users },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return users.get(filter, perPage, pageNumber, vtexIdToken)
  },
  getNumberUsers: (_: any, __: any, ctx: Context) => {
    const {
      clients: { users },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return users.getNumber(vtexIdToken)
  },
}

export const userResolvers = {
  User: {
    rcLastCart: prop('rclastcast'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
    cartTag: prop('carttag'),
    checkoutTag: prop('checkouttag'),
    autoFilter: prop('auto_filter'),
  },
}

export const tagResolvers = {
  Tag: {
    displayValue: prop('DisplayValue'),
    scores: (score: any, _: any) => {
      const { Scores } = score
      const scores: any[] = []
      forEachObjIndexed((v, k) => {
        const obj = {
          name: k,
          registers: map(item => {
            return {
              point: prop('Point', item),
              date: prop('Date', item),
              until: prop('Until', item),
            }
          }, v),
        }
        scores.push(obj)
      }, Scores)
      return scores
    },
  },
}
