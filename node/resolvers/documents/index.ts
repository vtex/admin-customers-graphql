import {
  DocumentInput,
  DocumentResponse,
} from '../../../typedql/types/Document'
import { RawDocumentResponse } from '../../clients/documents'
import { parseFieldsToJson } from '../../utils'

const parseDocumentResponses = ({
  Id: id,
  Href: href,
  DocumentId: documentId,
}: RawDocumentResponse): DocumentResponse => ({
  cacheId: documentId,
  documentId,
  href,
  id,
})

export const mutations = {
  saveDocument: async (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentResponse> => {
    const {
      clients: { documents },
    } = ctx
    return parseDocumentResponses(
      await documents.save(parseFieldsToJson(document.fields))
    )
  },
  updateDocument: async (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentResponse> => {
    const {
      clients: { documents },
    } = ctx
    const updatedDocument = parseFieldsToJson(document.fields)
    return parseDocumentResponses(
      await documents.update(updatedDocument, updatedDocument.id)
    )
  },
}
