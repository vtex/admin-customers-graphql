import { AuthType, ClientsConfig, IOClients } from '@vtex/api'
import SchemaDataSource from './schemas'

export class Clients extends IOClients {
  public get schemas(): SchemaDataSource {
    return this.getOrSet('schemas', SchemaDataSource)
  }
}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 1,
      timeout: 2000
    },
    schemas: {
      authType: AuthType.bearer,
    },
  },
}
