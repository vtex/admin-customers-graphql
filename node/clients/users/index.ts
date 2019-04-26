import { IODataSource } from '@vtex/api'

import { DATA_ENTITY } from '../../utils/constants'
import factory from '../client'
import { Int } from '../../../typedql/types/scalars'
class UserDataSource extends IODataSource {
  protected httpClientFactory = factory

  public getUsers = (filter: string, perPage: Int, pageNumber: Int) =>
    this.http.get(
      `${DATA_ENTITY}/search?_fields=all${filter ? `&${filter}` : ''}`,
      {
        metric: 'crm-get-users',
        headers: {
          'REST-Range': `resources=${perPage * pageNumber}-${perPage *
            (pageNumber + 1)} `,
        },
      }
    )
}

export default UserDataSource
