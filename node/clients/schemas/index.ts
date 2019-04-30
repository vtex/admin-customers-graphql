import { IODataSource } from '@vtex/api'

import { DATA_ENTITY, SCHEMA_NAME } from '../../utils/constants'
import factory from '../client'
import { withAuthToken } from '../../resolvers/headers'

class SchemaDataSource extends IODataSource {
  protected httpClientFactory = factory

  public get = (vtexIdToken: string) =>
    this.http.get(`${DATA_ENTITY}/schemas/${SCHEMA_NAME}`, {
      metric: 'crm-get-schema',
      headers: withAuthToken()(vtexIdToken),
    })
}

export default SchemaDataSource
