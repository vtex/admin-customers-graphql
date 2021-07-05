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
  phone?: Property
  businessPhone: Property
  tradeName: Property
  corporateName: Property
  isCorporate: Property
  gender: Property
  homePhone?: Property
  stateRegistration: Property
  documentType: Property
  corporateDocument: Property
  isNewsletterOptIn: Property
  rcLastCart: Property
  rcLastSession: Property
  rcLastCartValue: Property
  rcLastSessionDate: Property
}

export interface SchemaResponse {
  properties: Properties
  required: string[]
  vIndexed: string[]
  customFields?: CustomField[]
}

export interface CustomField {
  key: string
  value: Property
}

export interface DataEntitySchema {
  name: string
  schema: unknown
}
