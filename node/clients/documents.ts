import { IODataSource, LRUCache } from '@vtex/api'

import { DATA_ENTITY } from '../constants'
import forProfile from './client'

export interface RawDocumentResponse {
  Id: string
  DocumentId: string
  Href: string
}

const memoryCache = new LRUCache<string, any>({ max: 4000 })

metrics.trackCache('documents', memoryCache)

const factory = forProfile(memoryCache, metrics)

// https://documenter.getpostman.com/view/164907/master-data-api-v2-beta/7EHbXTe#4dd0c083-527d-13de-c30a-b26d5cd68c56
class DocumentsDataSource extends IODataSource {
  protected httpClientFactory = factory

  public save = (document: any): Promise<RawDocumentResponse> =>
    this.http.post(`dataentities/${DATA_ENTITY}/documents`, document, {
      metric: 'crm-create-document',
    })

  public update = (document: any, key?: string): Promise<RawDocumentResponse> =>
    this.http.patch(
      `dataentities/${DATA_ENTITY}/documents/${key || ''}`,
      document,
      {
        metric: 'crm-update-document',
      }
    )
}

export default DocumentsDataSource
