import { Int } from './scalars'

export interface Property {
  type?: string
  title?: string
  format?: string
  maxLength?: Int
}

export interface Properties {
  id: Property
  email: Property
  gender: Property
  userId: Property
  lastName: Property
  document: Property
  createdIn: Property
  firstName: Property
  birthDate: Property
  accountId: Property
  rcLastCart: Property
  documentType: Property
  rcLastSession: Property
  corporateName: Property
  customerClass: Property
  businessPhone: Property
  localeDefault: Property
  rcLastCartValue: Property
  isNewsletterOptIn: Property
  rcLastSessionDate: Property
  stateRegistration: Property
}

/** CRM Schema*/
export interface SchemaResponse {
  /** Properties of Schema */
  properties: Properties
  /** Required fields of Schema */
  required: string[]
  /** Indexed fields of Schema */
  vIndexed: string[]
  /** Custom fields created by the user */
  customFields?: CustomField[]
}

/** Custom field in a key/value format */
export interface CustomField {
  key: string
  value: Property
}
