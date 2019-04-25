import { IODataSource } from '@vtex/api'

import { DATA_ENTITY, SCHEMA_NAME } from '../../utils/constants'
import factory from '../client'

class SchemaDataSource extends IODataSource {
  protected httpClientFactory = factory

  public getSchema = () =>
    this.http.get(`${DATA_ENTITY}/schemas/${SCHEMA_NAME}`, {
      metric: 'crm-get-schema',
    })
}

export default SchemaDataSource
