import { AuthType, ClientsConfig, IOClients, LRUCache } from '@vtex/api'
import SchemaDataSource from './schemas'
import DocumentsDataSource from './documents'
import { forEachObjIndexed } from 'ramda'

const memoryCache = {
  documents: new LRUCache<string, any>({ max: 4000 }),
  schema: new LRUCache<string, any>({ max: 4000 }),
}

forEachObjIndexed((cacheInstance: LRUCache<string, any>, cacheName: string) => {
  metrics.trackCache(cacheName, cacheInstance)
}, memoryCache)

export class Clients extends IOClients {
  public get schemas(): SchemaDataSource {
    return this.getOrSet('schemas', SchemaDataSource)
  }
  public get documents(): DocumentsDataSource {
    return this.getOrSet('documents', DocumentsDataSource)
  }
}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 1,
      timeout: 2000,
    },
    schemas: {
      authType: AuthType.bearer,
      memoryCache: memoryCache.schema,
    },
    documents: {
      authType: AuthType.bearer,
      memoryCache: memoryCache.documents,
    },
  },
}
