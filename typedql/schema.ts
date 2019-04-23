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
   * Save given documents.
   *
   * @param documents Documents to be saved.
   */
  saveDocuments(documents: DocumentsInput): Document[]
}
