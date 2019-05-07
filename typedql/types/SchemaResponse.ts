import { Int } from './scalars'

export interface Property {
  type?: string
  title?: string
  format?: string
  maxLength?: Int
}

export interface Properties {
  id: Property
  firstName: Property
  lastName: Property
  email: Property
  document: Property
  userId: Property
  birthDate: Property
  phone: Property
  businessPhone: Property
  tradeName: Property
  corporateName: Property
  isCorporate: Property
  gender: Property
  homePhone: Property
  stateRegistration: Property
  documentType: Property
  corporateDocument: Property
  isNewsletterOptIn: Property
  rcLastCart: Property
  rcLastSession: Property
  rcLastCartValue: Property
  rcLastSessionDate: Property
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
