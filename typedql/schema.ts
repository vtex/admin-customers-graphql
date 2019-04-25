import { SchemaResponse } from './types/SchemaResponse'

export interface Query {
  /**
   * Get schema of CRM
   */
  getSchema: SchemaResponse
}
