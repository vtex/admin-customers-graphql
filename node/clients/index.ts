import { AuthType, ClientsConfig, IOClients, LRUCache } from '@vtex/api'
import SchemaDataSource from './schemas'
import { forEachObjIndexed } from 'ramda'

const memoryCache = {
  schema: new LRUCache<string, any>({ max: 4000 })
}

forEachObjIndexed((cacheInstance: LRUCache<string, any>, cacheName: string) => {
  metrics.trackCache(cacheName, cacheInstance)
}, memoryCache)

export class Clients extends IOClients {
  public get schemas(): SchemaDataSource {
    return this.getOrSet('schemas', SchemaDataSource)
  }
}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 1,
      timeout: 2000
    },
    schemas: {
      authType: AuthType.bearer,
      memoryCache: memoryCache.schema,
    },
  },
}
