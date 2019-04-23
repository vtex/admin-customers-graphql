import { DocumentsInput } from '../../../typedql/types/Document'

export const mutations = {
  saveDocuments: (
    _: any,
    { documents }: { documents: DocumentsInput },
    ctx: Context
  ) => {
    const {
      clients: { documents: documentsClient },
    } = ctx

    return Promise.all(
      Object.keys(documents).map(key => {
        const document = documents[key].document
        switch (documents[key].status) {
          case 'new':
            delete document.id
            return documentsClient.update(document)
          case 'staging':
            return documentsClient.update(document, key)
          default:
            return
        }
      })
    )
  },
}
