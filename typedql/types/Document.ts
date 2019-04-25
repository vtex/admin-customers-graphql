import { ID } from './scalars'

export interface Document {
  /** id is used as cacheId */
  cacheId: ID
  id: string
  fields: Field[]
}

export interface Field {
  key: string
  value: string
}

export interface DocumentPOSTResponse {
  /** documentId is used as cacheId */
  cacheId: ID
  id: string
  href: string
  documentId: string
}

/** Documents Input object to be used in Mutation */
/** @graphql input */
export interface DocumentInput {
  fields: FieldInput[]
}

/** @graphql input */
export interface FieldInput {
  key: string
  value: string
}
