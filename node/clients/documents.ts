import { IODataSource, LRUCache } from '@vtex/api'

import { Document, DocumentPOSTResponse } from '../../typedql/types/Document'
import { DATA_ENTITY } from '../constants'
import { mapKeyValues } from '../utils'
import forProfile from './client'

interface RawDocumentPOSTResponse {
  Id: string
  DocumentId: string
  Href: string
}

const parseDocumentPOSTResponse = ({
  Id: id,
  Href: href,
  DocumentId: documentId,
}: RawDocumentPOSTResponse): DocumentPOSTResponse => ({
  cacheId: documentId,
  documentId,
  href,
  id,
})

interface RawDocumentGETResponse {
  id: string
  [key: string]: any
}

const parseDocumentGETResponse = ({
  id,
  ...rest
}: RawDocumentGETResponse): Document => ({
  cacheId: id,
  fields: mapKeyValues(rest),
  id,
})

const memoryCache = new LRUCache<string, any>({ max: 4000 })

metrics.trackCache('documents', memoryCache)

const factory = forProfile(memoryCache, metrics)

// https://documenter.getpostman.com/view/164907/master-data-api-v2-beta/7EHbXTe#4dd0c083-527d-13de-c30a-b26d5cd68c56
class DocumentsDataSource extends IODataSource {
  protected httpClientFactory = factory

  public get = async (id: string): Promise<Document> =>
    parseDocumentGETResponse(
      await this.http.get<RawDocumentGETResponse>(
        `${DATA_ENTITY}/documents/${id}`,
        {
          metric: 'crm-get-document',
        }
      )
    )

  public save = async (document: any): Promise<DocumentPOSTResponse> =>
    parseDocumentPOSTResponse(
      await this.http.post<RawDocumentPOSTResponse>(
        `${DATA_ENTITY}/documents`,
        document,
        {
          metric: 'crm-create-document',
        }
      )
    )

  public update = (document: any, key?: string): Promise<void> =>
    this.http.patch(
      `${DATA_ENTITY}/documents/${key || ''}`,
      document,
      {
        metric: 'crm-update-document',
      }
    )
}

export default DocumentsDataSource
