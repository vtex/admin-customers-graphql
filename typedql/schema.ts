import { ID, Int } from './types/scalars'
import { SchemaResponse } from './types/SchemaResponse'
import {
  CacheableDocument,
  Document,
  DocumentPOSTResponse,
  DocumentInput,
} from './types/Document'
import { User } from './types/User'

export interface Query {
  /**
   * Get schema of CRM
   */

  /** @graphql Directives
   *  @cacheControl(scope: PRIVATE)
   */
  getSchema: SchemaResponse

  /**
   * Get Users of CRM
   * @param filter Filter for help in query. You should use the sql sintax.
   * @param perPage Number of items by page.
   * @param pageNumber The page number
   */

  /** @graphql Directives
   *  @cacheControl(scope: PRIVATE)
   */
  getUsers(filter: string, perPage: Int, pageNumber: Int): User[]

  /**
   * @graphql Directives
   * @cacheControl(scope: PRIVATE)
   */
  getNumberUsers(): Int
}

export interface Mutation {
  /**
   * Save given document.
   *
   * @param document Document to be saved.
   */
  saveDocument(document: DocumentInput): DocumentPOSTResponse

  /**
   * Updates a given document.
   *
   * @param document Document to be updated.
   */
  updateDocument(document: DocumentInput): Document

  /**
   * Deletes the document with the given ID.
   *
   * @param document Document to be deleted.
   */
  deleteDocument(id: ID): CacheableDocument
}
