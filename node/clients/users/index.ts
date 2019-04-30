import { IODataSource } from '@vtex/api'

import { DATA_ENTITY } from '../../utils/constants'
import factory from '../client'
import { Int } from '../../../typedql/types/scalars'
class UserDataSource extends IODataSource {
  protected httpClientFactory = factory

  public get = (
    filter: string,
    perPage: Int,
    pageNumber: Int,
    vtexIdToken: string
  ) =>
    this.http.get(
      `${DATA_ENTITY}/search?_fields=_all${filter ? `&${filter}` : ''}`,
      {
        metric: 'crm-get-users',
        headers: {
          'REST-Range': `resources=${perPage * pageNumber}-${perPage *
            (pageNumber + 1)} `,
          VtexIdClientAutCookie: vtexIdToken,
          'X-Vtex-Use-Https': 'true',
        },
      }
    )
}

export default UserDataSource
