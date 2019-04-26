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

export const fieldResolvers = {
  User: {
    rcLastCart: prop('rclastcast'),
    rcLastCartValue: prop('rclastcartvalue'),
    rcLastSession: prop('rclastsession'),
    rcLastSessionDate: prop('rclastsessiondate'),
    cartTag: prop('carttag'),
    checkoutTag: prop('checkouttag'),
    autoFilter: prop('auto_filter'),
    productPurchasedTag: (user: any, _:any, ctx: Context) => {
      const { productPurchasedTag  } = user
      console.log(">>>>>>>>ctx", ctx)
      console.log(">>>>>>>>>>>>>>>>>", user)
      console.log(">>>>>>>>>>>>>>>>>", prop('productPurchasedTag') )
      const scores = forEachObjIndexed((v, k) => {
        const obj = {
          name: v,
          registers: map(item => {
            return {
              point: prop('Point', item),
              date: prop('Date', item),
              until: prop('Until', item)
            }
          }, k),
        }
        return obj
      }, prop('Scores', productPurchasedTag))

      return {
        displayValue : prop('DisplayValue', productPurchasedTag),
        scores: scores
      }
    },
  },
}
