import { prop, forEachObjIndexed, map } from 'ramda'

export const queries = {
  getUsers: (_: any, args: any, ctx: Context) => {
    const { filter, perPage, pageNumber } = args
    const {
      clients: { users },
    } = ctx

    return users.getUsers(filter, perPage, pageNumber)
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
      const scores : any[] = []
      forEachObjIndexed((v, k) => {
        const obj = {
          name: k,
          registers: map(item => {
            return {
              point: prop('Point', item),
              date: prop('Date', item),
              until: prop('Until', item)
            }
          }, v),
        }
        scores.push(obj)
      }, Scores)
      return scores
    },
  },
}


