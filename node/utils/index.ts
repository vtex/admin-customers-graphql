import { mergeAll, zipObj } from 'ramda'

/*
 * Convert a list of fields like [ {key: 'propertyName', value: 'String'}, ... ]
 * to a JSON format.
 */
export const parseFieldsToJson = (
  fields: Array<{ key: string; value: string }>
): { [key: string]: any } =>
  mergeAll(
    fields.map((field: any) => zipObj([field.key], [JSON.parse(field.value)]))
  )
