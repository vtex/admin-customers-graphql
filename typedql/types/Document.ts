import { ID } from './scalars'

export interface CacheableDocument {
  /** id is used as cacheId */
  cacheId: ID
  id: ID
}

export interface Document extends CacheableDocument {
  fields: Field[]
}

export interface Field {
  key: string
  value: string
}

export interface DocumentPOSTResponse extends CacheableDocument {
  /** documentId is used as cacheId */
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
