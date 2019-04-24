import { Document, DocumentsInput } from './types/Document'
import { SchemaResponse } from './types/SchemaResponse'

export interface Query {
  /**
   * Get schema of CRM
   */
  getSchema: SchemaResponse

}

export interface Mutation {
  /** @graphql Directives
   *  @cacheControl(scope: PRIVATE)
   */

  /**
   * Save given document.
   *
   * @param document Document to be saved.
   */
  saveDocument(document: DocumentInput): DocumentResponse

  /**
   * Updates a given document.
   *
   * @param document Document to be updated.
   */
  updateDocument(document: DocumentInput): DocumentResponse
}
