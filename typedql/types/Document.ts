import { ID } from './scalars'

export interface Document {
  id: ID
}

/** Documents Input object to be used in Mutation */
/** @graphql input */
export interface DocumentsInput {
  [key: string]: {
    status: string
    document: Document
  }
}
