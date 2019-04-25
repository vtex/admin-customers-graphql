import { IODataSource } from '@vtex/api'

import { DATA_ENTITY } from '../../utils/constants'
import factory from '../client'

class UserDataSource extends IODataSource {
  protected httpClientFactory = factory

  public getUsers = () =>
    this.http.get(`${DATA_ENTITY}/search?_fields=all`, {
      metric: 'crm-get-users',
    })
}

export default UserDataSource
