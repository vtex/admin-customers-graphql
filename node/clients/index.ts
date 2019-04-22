import { ClientsConfig, IOClients } from '@vtex/api'

export class Clients extends IOClients {}

export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {},
}
