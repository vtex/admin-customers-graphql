import { ServiceContext } from '@vtex/api'
import { Clients } from './clients'
import { Int } from '../typedql/types/scalars'

declare global {
  type Context = ServiceContext<Clients, void>

  interface UsersArgs {
    filter: string
    perPage: Int
    pageNumber: Int
  }
}
