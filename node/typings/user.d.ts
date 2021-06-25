import { ID, Int } from './scalars'

export interface User {
  id: ID
  isCorporate?: boolean
  tradeName?: string
  homePhone?: string
  phone?: string
  stateRegistration?: string
  email: string
  userId?: ID
  firstName?: string
  lastName?: string
  document?: string
  isNewsletterOptIn?: boolean
  birthDate?: string
  businessPhone?: string
  corporateDocument?: string
  corporateName?: string
  documentType?: string
  gender?: string
  rcLastCart?: string
  rcLastCartValue?: string
  rcLastSession?: string
  rcLastSessionDate?: string
}
