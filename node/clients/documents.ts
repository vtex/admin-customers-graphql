import { IODataSource } from '@vtex/api'
import { prop } from 'ramda'

import { Document, DocumentPOSTResponse } from '../../typedql/types/Document'
import { DATA_ENTITY } from '../utils/constants'
import { mapKeyValues } from '../utils'
import forProfile from './client'

interface RawDocumentPOSTResponse {
  Id: string
  DocumentId: string
  Href: string
}

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

interface RawDocumentGETResponse {
  id: string
  [key: string]: any
}

const parseDocumentGETResponse = ({
  id,
  ...rest
}: RawDocumentGETResponse): Document => ({
  cacheId: id,
  fields: mapKeyValues(rest),
  id,
})

const factory = forProfile

// https://documenter.getpostman.com/view/164907/master-data-api-v2-beta/7EHbXTe#4dd0c083-527d-13de-c30a-b26d5cd68c56
class DocumentsDataSource extends IODataSource {
  protected httpClientFactory = factory

  public get = async (id: string): Promise<Document> =>
    parseDocumentGETResponse(
      await this.http.get<RawDocumentGETResponse>(
        `${DATA_ENTITY}/documents/${id}`,
        {
          metric: 'crm-get-document',
        }
      )
    )

  public save = async (document: any): Promise<DocumentPOSTResponse> =>
    parseDocumentPOSTResponse(
      await this.http.post<RawDocumentPOSTResponse>(
        `${DATA_ENTITY}/documents`,
        document,
        {
          metric: 'crm-create-document',
        }
      )
    )

  public update = (document: any, key?: string): Promise<void> =>
    this.http.patch(`${DATA_ENTITY}/documents/${key || ''}`, document, {
      metric: 'crm-update-document',
    })

  public delete = (id: string): Promise<void> =>
    this.http
      .delete(`${DATA_ENTITY}/documents/${id}`, {
        metric: 'crm-delete-document',
      })
      .then(prop('data'))
}

export default DocumentsDataSource
