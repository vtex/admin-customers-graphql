import { IODataSource } from '@vtex/api'

import { DATA_ENTITY } from '../../utils/constants'
import factory from '../client'

class UserDataSource extends IODataSource {
  protected httpClientFactory = factory

  public getUsers = (filter : string) =>
    this.http.get(`${DATA_ENTITY}/search?_fields=all${filter && `&${filter}`}`, {
      metric: 'crm-get-users',
    })
}

export default UserDataSource
