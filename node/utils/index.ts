import { mergeAll, zipObj } from 'ramda'

/**
 * Tries to parse a value. If it isn't possible, returns the original value
 */
const tryParse = (value: string): string | any => {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

/*
 * Convert a list of fields like [ {key: 'propertyName', value: 'String'}, ... ]
 * to a JSON format.
 */
export const parseFieldsToJson = (
  fields: Array<{ key: string; value: string }>
): { [key: string]: any } =>
  mergeAll(
    fields.map((field: any) => zipObj([field.key], [tryParse(field.value)]))
  )

/**
 * Map a document object to a list of {key: 'property', value: 'propertyValue'}.
 */
export const mapKeyValues = (document: any) =>
  Object.keys(document).map(key => ({
    key,
    value: document[key],
  }))

export const defaultFields = [
  'id',
  'email',
  'gender',
  'userId',
  'approved',
  'lastName',
  'isPJ',
  'homePhone',
  'nickname',
  'fancyName',
  'document',
  'followers',
  'createdIn',
  'firstName',
  'birthDate',
  'tradeName',
  'rclastcart',
  'isCorporate',
  'documentType',
  'rclastsession',
  'corporateName',
  'customerClass',
  'businessPhone',
  'localeDefault',
  'rclastcartvalue',
  'isNewsletterOptIn',
  'rclastsessionsate',
  'stateRegistration',
]
