import { JanusClient } from '@vtex/api'

import { DATA_ENTITY, SCHEMA_NAME } from '../utils/constants'
import { withAuthToken } from './headers'

export interface DataEntitySchema {
  name: string
  schema: unknown
}

class Schemas extends JanusClient {
  public get = (vtexIdToken: string) =>
    this.http.get(`api/dataentities/${DATA_ENTITY}/schemas/${SCHEMA_NAME}`, {
      metric: 'crm-get-schema',
      headers: withAuthToken()(vtexIdToken),
    })

  public list = (vtexIdToken: string): Promise<DataEntitySchema[]> =>
    this.http.get<DataEntitySchema[]>(
      `api/dataentities/${DATA_ENTITY}/schemas`,
      {
        metric: 'crm-list-schema',
        headers: withAuthToken()(vtexIdToken),
      }
    )
}

export default Schemas
