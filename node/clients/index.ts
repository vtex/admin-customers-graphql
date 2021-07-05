import { AuthType, ClientsConfig, IOClients, LRUCache } from '@vtex/api'
import { forEachObjIndexed } from 'ramda'

import { CustomMasterdata } from './masterdata'

const memoryCache = {
  documents: new LRUCache<string, any>({ max: 4000 }),
  schema: new LRUCache<string, any>({ max: 4000 }),
  users: new LRUCache<string, any>({ max: 4000 }),
}

forEachObjIndexed((cacheInstance: LRUCache<string, any>, cacheName: string) => {
  metrics.trackCache(cacheName, cacheInstance)
}, memoryCache)

export class Clients extends IOClients {
  public get customMasterdata() {
    return this.getOrSet('customMasterdata', CustomMasterdata)
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
    users: {
      authType: AuthType.bearer,
      memoryCache: memoryCache.users,
    },
  },
}
