import { prop } from 'ramda'

export const queries = {
  getUsers: (_: any, __: any, ctx: Context) => {
    const {
      clients: { users },
    } = ctx

    return users.getUsers()
  },
}

export const fieldResolvers = {
  User: {
    profilePicture: prop("profilePicture"),
    isCorporate: prop("isCorporate"),
    tradeName: prop("tradeName"),
    rcLastCart: prop("rclastcast"),
    rcLastCartValue: prop("rclastcar"),
    rcLastSession: prop("rclastsession"),
    rcLastSessionDate: prop("rclastsessiondate"),
    homePhone: prop("homePhone"),
    phone: prop("phone"),
    brandPurchasedTag: prop("brandPurchasedTag"),
    brandVisitedTag: prop("brandVisitedTag"),
    categoryPurchasedTag: prop("categoryPurchasedTag"),
    categoryVisitedTag: prop("categoryVisitedTag"),
    departmentVisitedTag: prop("departamentVisitedTag"),
    productPurchasedTag: prop("productPurchasedTag"),
    productVisitedTag: prop("productVisitedTag"),
    stateRegistration: prop("stateRegistration"),
    email: prop("email"),
    userId:prop("userId"),
    firstName: prop("firstName"),
    lastName: prop("lastName"),
    document: prop("document"),
    isNewsletterOptIn: prop("isNewsletterOptIn"),
    localeDefault: prop("localeDefault"),
    attach: prop("attach"),
    approved: prop("approved"),
    birthDate: prop("birthDate"),
    businessPhone: prop("businessPhone"),
    cartTag: prop("carttag"),
    checkoutTag: prop("checkouttag"),
    corporateDocument: prop("corporateDocument"),
    corporateName: prop("corporateName"),
    documentType: prop("documentType"),
    gender: prop("gender"),
    visitedProductWithStockOutSkusTag: prop("visitedProductWithStockOutSkusTag"),
    customerClass: prop("customerClass"),
    priceTables: prop("priceTables"),
    id: prop("id"),
    accountId: prop("accountId"),
    accountName: prop("accountName"),
    dataEntityId: prop("dataEntityId"),
    createdBy: prop("createdBy"),
    createdIn: prop("createdIn"),
    updatedBy: prop("updatedBy"),
    updatedIn: prop("updatedIn"),
    lastInteractionBy: prop("lastInteractionBy"),
    lastInteractionIn: prop("lastInteractionIn"),
    followers: prop("followers"),
    tags: prop("tags"),
    autoFilter: prop("auto_filter")
  },
}
