import {
  Document,
  DocumentInput,
  DocumentPOSTResponse,
} from '../../../typedql/types/Document'
import { parseFieldsToJson } from '../../utils'

export const mutations = {
  saveDocument: async (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentPOSTResponse> => {
    const {
      clients: { documents },
    } = ctx
    return await documents.save(parseFieldsToJson(document.fields))
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
}
