import type { ID } from './scalars'
import { Int } from './scalars'

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

export interface Pagination {
  total: number
  page: number
  pageSize: number
}
export interface UserResponse {
  data: User[]
  pagination: Pagination
}
