export const withAuthToken = (currentHeaders = {}) => (vtexIdToken: string) => {
  return {
    ...currentHeaders,
    VtexIdclientAutCookie: vtexIdToken,
    'X-Vtex-Use-Https': 'true',
  }
}
