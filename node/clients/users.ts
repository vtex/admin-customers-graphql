import { JanusClient } from '@vtex/api'

import { DATA_ENTITY } from '../utils/constants'
import { Int } from '../../typedql/types/scalars'
import { withAuthToken } from '../resolvers/headers'

class Users extends JanusClient {
  public get = (
    filter: string,
    perPage: Int,
    pageNumber: Int,
    vtexIdToken: string
  ) => {
    const from = perPage * pageNumber
    // not inclusive
    const to = perPage * (pageNumber + 1)

    return this.http.get(
      `api/dataentities/${DATA_ENTITY}/search?_fields=_all${
        filter ? `&${filter}` : ''
      }`,
      {
        metric: 'crm-get-users',
        headers: withAuthToken({
          'REST-Range': `resources=${from}-${to} `,
        })(vtexIdToken),
      }
    )
  }

  public getTotalNumber = async (filter: string, vtexIdToken: string) => {
    const res = await this.http.getRaw(
      `api/dataentities/${DATA_ENTITY}/search?_fields=_all${
        filter ? `&${filter}` : ''
      }`,
      {
        metric: 'crm-get-users',
        headers: withAuthToken({ 'REST-Range': 'resources=1-1' })(vtexIdToken),
      }
    )

    const contentRange = res.headers['rest-content-range']
    return parseInt(contentRange.split('/')[1])
  }
}

export default Users
