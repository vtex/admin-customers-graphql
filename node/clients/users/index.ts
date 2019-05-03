import { IODataSource } from '@vtex/api'

import { DATA_ENTITY } from '../../utils/constants'
import factory from '../client'
import { Int } from '../../../typedql/types/scalars'
import { withAuthToken } from '../../resolvers/headers'
class UserDataSource extends IODataSource {
  protected httpClientFactory = factory

  public get = (
    filter: string,
    perPage: Int,
    pageNumber: Int,
    vtexIdToken: string
  ) => {
    const from = perPage * pageNumber
    const to = perPage * (pageNumber + 1) - 1

    return this.http.get(
      `${DATA_ENTITY}/search?_fields=_all${filter ? `&${filter}` : ''}`,
      {
        metric: 'crm-get-users',
        headers: withAuthToken({
          'REST-Range': `resources=${from}-${to} `,
        })(vtexIdToken),
      }
    )
  }

  public getTotalNumber = async (vtexIdToken: string) => {
    const res = await this.http.getRaw(`${DATA_ENTITY}/search`, {
      metric: 'crm-get-users',
      headers: withAuthToken({ 'REST-Range': 'resources=1-1' })(vtexIdToken),
    })

    const contentRange = res.headers['rest-content-range']
    return parseInt(contentRange.split('/')[1])
  }
}

export default UserDataSource
