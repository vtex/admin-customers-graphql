import { ID } from './scalars'

export interface CacheableDocument {
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
  href: string
  documentId: string
}

export interface DocumentInput {
  fields: FieldInput[]
}

export interface FieldInput {
  key: string
  value: string
}

export interface RawDocumentPOSTResponse {
  Id: string
  DocumentId: string
  Href: string
}

export interface RawDocumentGETResponse {
  id: string
  [key: string]: any
}
