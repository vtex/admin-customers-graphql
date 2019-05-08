import { JanusClient } from '@vtex/api'

import { DATA_ENTITY, SCHEMA_NAME } from '../utils/constants'
import { withAuthToken } from './headers'

class Schemas extends JanusClient {
  public get = (vtexIdToken: string) =>
    this.http.get(`api/dataentities/${DATA_ENTITY}/schemas/${SCHEMA_NAME}`, {
      metric: 'crm-get-schema',
      headers: withAuthToken()(vtexIdToken),
    })
}

export default Schemas
