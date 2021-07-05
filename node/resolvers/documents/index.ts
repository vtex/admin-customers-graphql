import { ID } from '../../typings/scalars'
import {
  CacheableDocument,
  Document,
  DocumentInput,
  DocumentPOSTResponse,
} from '../../typings/document'
import { save, update, deleteDocument } from '../../services/documents'

export const mutations = {
  saveDocument: async (
    _: unknown,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentPOSTResponse> => {
    const {
      clients: { customMasterdata },
    } = ctx

    return save({ client: customMasterdata, documentInput: document })
  },
  updateDocument: async (
    _: unknown,
    { id, document }: { id: string; document: DocumentInput },
    ctx: Context
  ): Promise<Document> => {
    const {
      clients: { customMasterdata },
    } = ctx

    return update({ client: customMasterdata, id, documentInput: document })
  },
  deleteDocument: async (
    _: unknown,
    { id }: { id: ID },
    ctx: Context
  ): Promise<CacheableDocument> => {
    const {
      clients: { customMasterdata },
    } = ctx

    return deleteDocument({ client: customMasterdata, id })
  },
}
