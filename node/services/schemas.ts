import type { MasterData } from '@vtex/api'

import type { DataEntitySchema, SchemaResponse } from '../typings/schema'
import { DATA_ENTITY, SCHEMA_NAME } from '../utils/constants'

export const getSchema = async ({ client }: { client: MasterData }) => {
  const data = await client.getSchema<DataEntitySchema[]>({
    dataEntity: DATA_ENTITY,
    schema: '',
  })

  const dataEntitySchema = data.find((schema) => schema.name === SCHEMA_NAME)

  return dataEntitySchema?.schema as SchemaResponse
}
