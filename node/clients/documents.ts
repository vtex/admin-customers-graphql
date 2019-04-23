import { IODataSource, LRUCache } from '@vtex/api'

import { DATA_ENTITY } from '../constants'
import forProfile from './client'

const memoryCache = new LRUCache<string, any>({ max: 4000 })

metrics.trackCache('documents', memoryCache)

const factory = forProfile(memoryCache, metrics)

class DocumentsDataSource extends IODataSource {
  protected httpClientFactory = factory

  public update = (document: any, key?: string) =>
    this.http.patch(
      `dataentities/${DATA_ENTITY}/documents/${key || ''}`,
      document,
      {
        metric: 'crm-update-documents',
      }
    )
}

export default DocumentsDataSource
