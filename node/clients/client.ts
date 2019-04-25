import { HttpClient, HttpClientFactory } from '@vtex/api'

const httpFactory: HttpClientFactory = ({ context, options }) =>
  context &&
  HttpClient.forExternal(
    `https://${context.account}.vtexcommercestable.com.br/api/dataentities/`,
    context,
    {
      ...options,
    }
  )

export default httpFactory
