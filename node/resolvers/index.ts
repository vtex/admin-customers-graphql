import {
  fieldResolvers as schemasResolvers,
  propertiesFieldResolvers,
  queries as schemasQueries,
} from './schemas'
import { mutations as documentMutations } from './documents'

export const resolvers = {
  ...schemasResolvers,
  ...propertiesFieldResolvers,
  Query: {
    ...schemasQueries,
  },
  // tslint:disable-next-line
  Mutation: {
    ...documentMutations,
  },
}
