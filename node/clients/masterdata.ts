import {
  AuthenticationError,
  InstanceOptions,
  IOContext,
  MasterData,
} from '@vtex/api'

export class CustomMasterdata extends MasterData {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    if (!ctx.adminUserAuthToken) {
      throw new AuthenticationError('User is not logged in')
    }

    super(ctx, {
      ...options,
      headers: {
        VtexIdclientAutCookie: ctx.adminUserAuthToken,
      },
    })
  }
}
