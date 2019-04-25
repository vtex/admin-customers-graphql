import {
  fieldResolvers as schemasResolvers,
  propertiesFieldResolvers,
  queries as schemasQueries,
} from './schemas'
import { fieldResolvers as usersResolvers, queries as usersQueries} from './users'
import { mutations as documentMutations } from './documents'

export const resolvers = {
  ...schemasResolvers,
  ...propertiesFieldResolvers,
  ...usersResolvers,
  Query: {
    ...schemasQueries,
    ...usersQueries,
  },
  Mutation: {
    ...documentMutations,
  },
}
