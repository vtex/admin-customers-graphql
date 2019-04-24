import { HttpClient, HttpClientFactory } from '@vtex/api'

const httpFactory = (memoryCache: any, metrics: any) => {
  const factory: HttpClientFactory = ({ context, options }) =>
    context &&
    HttpClient.forExternal(
      `https://${context.account}.vtexcommercestable.com.br/api/dataentities/`,
      context,
      {
        ...options,
        memoryCache,
        metrics,
      }
    )
    return factory
}

export default httpFactory
