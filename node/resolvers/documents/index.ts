import { ID } from '../../../typedql/types/scalars'
import {
  CacheableDocument,
  Document,
  DocumentInput,
  DocumentPOSTResponse,
} from '../../../typedql/types/Document'
import { parseFieldsToJson } from '../../utils'

export const mutations = {
  saveDocument: (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentPOSTResponse> => {
    const {
      clients: { documents },
    } = ctx
    return documents.save(parseFieldsToJson(document.fields))
  },
  updateDocument: async (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<Document> => {
    const {
      clients: { documents },
    } = ctx
    const updatedDocument = parseFieldsToJson(document.fields)
    await documents.update(updatedDocument, updatedDocument.id)
    return documents.get(updatedDocument.id)
  },
  deleteDocument: async (
    _: any,
    { id }: { id: ID },
    ctx: Context
  ): Promise<CacheableDocument> => {
    const {
      clients: { documents },
    } = ctx
    await documents.delete(id)
    return { cacheId: id, id }
  },
}
