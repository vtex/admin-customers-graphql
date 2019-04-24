import { SchemaResponse } from './types/SchemaResponse'
import { Document, DocumentPOSTResponse, DocumentInput } from './types/Document'

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
  saveDocument(document: DocumentInput): DocumentPOSTResponse

  /**
   * Updates a given document.
   *
   * @param document Document to be updated.
   */
  updateDocument(document: DocumentInput): Document
}
