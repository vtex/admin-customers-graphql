import { ID, Int } from './scalars'


export interface Tag {
  displayValue?: string
  scores?: Score[]
}

export interface Score {
  name?: string
  registers?: Register[]
}

export interface Register {
  point?: Int
  date?: string
  until?: string
}

export interface User {
  /**
   * Indicate the profile picture file
   */
  profilePicture?: string
  /** Indicates it is a company  */
  isCorporate?: boolean
  /** Company (PJ) – Trade name */
  tradeName?: string
  /** URl to restock shopping cart with all the products */
  rcLastCart?: string
  /** Value of last cart */
  rcLastCartValue?: string
  /** ID of browsing script session */
  rcLastSession?: string
  /** Date of last browsing session saved */
  rcLastSessionDate?: string
  /** Registered phone no. of customer */
  homePhone?: string
  phone?: string
  brandPurchasedTag?: Tag
  /** List of last brands visited */
  brandVisitedTag?: Tag
  categoryPurchasedTag?: Tag
  /** List of last categories visited */
  categoryVisitedTag?: Tag
  /** List of IDs of last products visited */
  departmentVisitedTag?: Tag
  productPurchasedTag?: Tag
  /** List of IDs of last products visited */
  productVisitedTag?: Tag
  /** State registration of Company */
  stateRegistration?: string
  /** Email address of customer */
  email: string
  /** ID of customer in CRM */
  userId?: ID
  /** First name of customer  */
  firstName?: string
  /** Last name of customer */
  lastName?: string
  /** No. of CPF or CNPJ of customer  */
  document?: string
  /** Opted to receive Newsletter */
  isNewsletterOptIn?: boolean
  localeDefault?: string
  attach?: string
  approved?: string
  /** User bithdate */
  birthDate?: string
  /** Registered phone of the company. */
  businessPhone?: string
  /** List of IDs of last SKUs in the cart */
  cartTag?: Tag
  /** List of Checkout steps completed by the customer */
  checkoutTag?: Tag
  /** CNPJ number */
  corporateDocument?: string
  /** Company name */
  corporateName?: string
  /** Type of document of customer */
  documentType?: string
  /** Gender of customer */
  gender?: string
  /** List of IDs of last unavailable products visited */
  visitedProductWithStockOutSkusTag?: Tag
  customerClass?: string
  priceTables?: string
  id: ID
  accountId: string
  accountName: string
  dataEntityId: string
  /** User who created the record */
  createdBy?: string
  /** createdIn */
  createdIn?: string
  /** User who amended the record   */
  updatedBy?: string
  /** Date of last update of record in CRM */
  updatedIn?: string
  /** User who amended the record */
  lastInteractionBy?: string
  /** Date of last update of record in CRM */
  lastInteractionIn?: string
  followers?: string[]
  tags?: string[]
  autoFilter?: string
}
