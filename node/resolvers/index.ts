import {
  fieldResolvers as schemasResolvers,
  propertiesFieldResolvers,
  queries as schemasQueries,
} from './schemas'
import {
  userResolvers as usersResolvers,
  tagResolvers,
  queries as usersQueries,
} from './users'
import { mutations as documentMutations } from './documents'

export const resolvers = {
  ...schemasResolvers,
  ...propertiesFieldResolvers,
  ...usersResolvers,
  ...tagResolvers,
  Query: {
    ...schemasQueries,
    ...usersQueries,
  },
  Mutation: {
    ...documentMutations,
  },
}
