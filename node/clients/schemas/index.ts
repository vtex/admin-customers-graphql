import { IODataSource, LRUCache } from '@vtex/api'

import { DATA_ENTITY, SCHEMA_NAME } from '../../utils/constants'
import factory from '../client'

const memoryCache = new LRUCache<string, any>({ max: 4000 })

metrics.trackCache('schemas', memoryCache)

class SchemaDataSource extends IODataSource {
  protected httpClientFactory = factory(memoryCache, metrics)

  public getSchema = () =>
    this.http.get(`${DATA_ENTITY}/schemas/${SCHEMA_NAME}`, {
      metric: 'crm-get-schema',
    })
}

export default SchemaDataSource
