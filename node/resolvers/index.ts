import {
  fieldResolvers as schemasResolvers,
  propertiesFieldResolvers,
  queries as schemasQueries } from './schemas'

export const resolvers = {
  ...schemasResolvers,
  ...propertiesFieldResolvers,
  Query: {
    ...schemasQueries,
  },
}