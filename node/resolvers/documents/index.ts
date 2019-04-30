import { ID } from '../../../typedql/types/scalars'
import {
  CacheableDocument,
  Document,
  DocumentInput,
  DocumentPOSTResponse,
} from '../../../typedql/types/Document'
import { parseFieldsToJson } from '../../utils'
import { AuthenticationError } from '@vtex/api'

export const mutations = {
  saveDocument: (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<DocumentPOSTResponse> => {
    const {
      clients: { documents },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    return documents.save(parseFieldsToJson(document.fields), vtexIdToken)
  },
  updateDocument: async (
    _: any,
    { document }: { document: DocumentInput },
    ctx: Context
  ): Promise<Document> => {
    const {
      clients: { documents },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    const updatedDocument = parseFieldsToJson(document.fields)
    await documents.update(vtexIdToken, updatedDocument, updatedDocument.id)
    return documents.get(updatedDocument.id, vtexIdToken)
  },
  deleteDocument: async (
    _: any,
    { id }: { id: ID },
    ctx: Context
  ): Promise<CacheableDocument> => {
    const {
      clients: { documents },
      cookies,
    } = ctx
    const vtexIdToken = cookies.get('VtexIdclientAutCookie')
    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')
    await documents.delete(id, vtexIdToken)
    return { cacheId: id, id }
  },
}
