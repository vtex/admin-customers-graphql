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
  id: ID
  /** Indicates it is a company  */
  isCorporate?: boolean
  /** Company (PJ) – Trade name */
  tradeName?: string
  /** Registered phone no. of customer */
  homePhone?: string
  phone?: string
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
  /** User bithdate */
  birthDate?: string
  /** Registered phone of the company. */
  businessPhone?: string
  /** CNPJ number */
  corporateDocument?: string
  /** Company name */
  corporateName?: string
  /** Type of document of customer */
  documentType?: string
  /** Gender of customer */
  gender?: string
  /** URl to restock shopping cart with all the products */
  rcLastCart?: string
  /** Value of last cart */
  rcLastCartValue?: string
  /** ID of browsing script session */
  rcLastSession?: string
  /** Date of last browsing session saved */
  rcLastSessionDate?: string
}
