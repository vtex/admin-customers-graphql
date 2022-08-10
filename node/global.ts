import type { ServiceContext } from '@vtex/api'

import type { Clients } from './clients'
import type { Int } from './typings/scalars'

declare global {
  type Context = ServiceContext<Clients>

  interface UsersArgs {
    filter: string
    perPage: Int
    pageNumber: Int
  }
}
