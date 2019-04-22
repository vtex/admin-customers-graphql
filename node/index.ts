import { Service } from '@vtex/api'

import { clients } from './clients'
import { resolvers } from './resolvers'

export default new Service({
  clients,
  graphql: { resolvers },
})
