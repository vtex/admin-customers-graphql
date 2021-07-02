import { MasterData } from '@vtex/api'

import { User } from '../typings/user'
import { DATA_ENTITY } from '../utils/constants'

export const search = async ({
  client,
  params: { filter, perPage, pageNumber },
}: {
  client: MasterData
  params: UsersArgs
}) => {
  return client.searchDocumentsWithPaginationInfo<User>({
    dataEntity: DATA_ENTITY,
    fields: ['_all'],
    pagination: {
      page: pageNumber,
      pageSize: perPage,
    },
    where: filter,
  })
}
