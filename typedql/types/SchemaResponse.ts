import { Int } from './scalars'

export interface Property {
  type?: string
  title?: string
  format?: string
  maxLength?: Int
}

export interface Properties {
  id: Property
  tags: Property
  email: Property
  gender: Property
  userId: Property
  approved: Property
  lastName: Property
  document: Property
  updatedIn: Property
  followers: Property
  createdIn: Property
  firstName: Property
  birthDate: Property
  accountId: Property
  tradeName: Property
  autoFilter: Property
  rcLastCart: Property
  isCorporate: Property
  accountName: Property
  priceTables: Property
  documentType: Property
  dataEntityId: Property
  rcLastSession: Property
  corporateName: Property
  customerClass: Property
  businessPhone: Property
  localeDefault: Property
  rcLastCartValue: Property
  isNewsletterOptIn: Property
  lastInteractionIn: Property
  rcLastSessionDate: Property
  corporateDocument: Property
  stateRegistration: Property
}

/**
 * Schema of CRM
 */
export interface SchemaResponse {
  /**
   * Properties of schema
   */
  properties: Properties
  /**
   * Required fields of schema
   */
  required: string[]
  /**
   * Indexed fields of schema
   */
  vIndexed: string[]
}
