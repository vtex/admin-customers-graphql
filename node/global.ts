import { ServiceContext } from '@vtex/api'
import { Clients } from './clients'
import { Int } from './typings/scalars'

declare global {
  type Context = ServiceContext<Clients>

  interface UsersArgs {
    filter: string
    perPage: Int
    pageNumber: Int
  }
}
