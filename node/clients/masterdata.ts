import type { InstanceOptions, IOContext } from '@vtex/api'
import { AuthenticationError, MasterData } from '@vtex/api'

export class CustomMasterdata extends MasterData {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    if (!ctx.adminUserAuthToken) {
      throw new AuthenticationError('User is not logged in')
    }

    super(ctx, {
      ...options,
      headers: {
        // Injecting `ctx.adminUserAuthToken` in headers to force the client to use the admin user authentication instead of the application one.
        VtexIdclientAutCookie: ctx.adminUserAuthToken,
      },
    })
  }
}
