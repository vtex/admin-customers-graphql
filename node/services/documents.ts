import type { MasterData } from '@vtex/api'
import { ResolverError } from '@vtex/api'
import { path } from 'ramda'

import type {
  Document,
  DocumentInput,
  DocumentPOSTResponse,
  RawDocumentGETResponse,
  RawDocumentPOSTResponse,
} from '../typings/document'
import { mapKeyValues, parseFieldsToJson } from '../utils'
import { DATA_ENTITY } from '../utils/constants'

const parseDocumentPOSTResponse = ({
  Id: id,
  Href: href,
  DocumentId: documentId,
}: RawDocumentPOSTResponse): DocumentPOSTResponse => ({
  cacheId: documentId,
  documentId,
  href,
  id,
})

const parseDocumentGETResponse = ({
  id,
  ...rest
}: RawDocumentGETResponse): Document => ({
  cacheId: id,
  fields: mapKeyValues(rest),
  id,
})

export const save = async ({
  client,
  documentInput,
}: {
  client: MasterData
  documentInput: DocumentInput
}) => {
  const parsedDocument = parseFieldsToJson(documentInput.fields)

  try {
    const data = await client.createDocument({
      dataEntity: DATA_ENTITY,
      fields: parsedDocument,
    })

    return parseDocumentPOSTResponse(data)
  } catch (e) {
    if (path(['response', 'data', 'Message'], e) === 'duplicated entry') {
      throw new ResolverError(
        'Email already registered.',
        400,
        'admin/customers.form.error.duplicateEmail'
      )
    } else {
      throw new ResolverError(
        'Some error has occurred.',
        400,
        'admin/customers.form.error.genericError'
      )
    }
  }
}

export const update = async ({
  client,
  id,
  documentInput,
}: {
  client: MasterData
  id: string
  documentInput: DocumentInput
}) => {
  const updatedDocument = parseFieldsToJson(documentInput.fields)

  await client.updatePartialDocument({
    dataEntity: DATA_ENTITY,
    id,
    fields: updatedDocument,
  })

  const data = await client.getDocument<Document>({
    id,
    dataEntity: DATA_ENTITY,
    fields: [],
  })

  return parseDocumentGETResponse(data)
}

export const deleteDocument = async ({
  client,
  id,
}: {
  client: MasterData
  id: string
}) => {
  await client.deleteDocument({ dataEntity: DATA_ENTITY, id })

  return { cacheId: id, id }
}
