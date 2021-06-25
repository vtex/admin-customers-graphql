import { AuthenticationError } from '@vtex/api'

import { ID } from '../../typings/scalars'
import {
  CacheableDocument,
  Document,
  DocumentInput,
  DocumentPOSTResponse,
} from '../../typings/document'
import { parseFieldsToJson } from '../../utils'

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
    { id, document }: { id: string; document: DocumentInput },
    ctx: Context
  ): Promise<Document> => {
    const {
      clients: { documents },
      cookies,
    } = ctx

    const vtexIdToken = cookies.get('VtexIdclientAutCookie')

    if (!vtexIdToken) throw new AuthenticationError('User is not logged in')

    const updatedDocument = parseFieldsToJson(document.fields)

    await documents.update(vtexIdToken, updatedDocument, id)

    return documents.get(id, vtexIdToken)
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
