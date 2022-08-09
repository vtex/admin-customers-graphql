import { mutations } from '../../resolvers/documents'
import type {
  DocumentInput,
  DocumentPOSTResponse,
  Document,
  CacheableDocument,
} from '../../typings/document'
import { deleteDocument, update, save } from '../../services/documents'

jest.mock('../../services/documents', () => {
  return {
    save: jest.fn(),
    update: jest.fn(),
    deleteDocument: jest.fn(),
  }
})

describe('documents', () => {
  describe('saveDocument', () => {
    it('should call save document success', async () => {
      // arrange
      const token = 'mockToken'
      const documentToAdd = {
        fields: [{ key: 'email', value: 'email@email.com' }],
      } as DocumentInput

      const mockResult: DocumentPOSTResponse = {
        cacheId: 'cacheId',
        documentId: 'documentId',
        href: 'href',
        id: 'id',
      }

      const mockService = save as jest.Mock

      mockService.mockImplementation(() => mockResult)

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          customMasterdata: {
            createDocument: jest.fn(),
          },
        },
      } as any

      // act
      const document = await mutations.saveDocument(
        {},
        { document: documentToAdd },
        context
      )

      // assert
      expect(save).toHaveBeenCalledWith({
        client: context.clients.customMasterdata,
        documentInput: documentToAdd,
      })
      expect(document).toBeTruthy()
    })
  })

  describe('updateDocument', () => {
    it('should call update document success', async () => {
      // arrange
      const token = 'mockToken'
      const documentId = '123'
      const documentToUpdate = {
        fields: [
          { key: 'email', value: 'email@email.com' },
          { key: 'firstName', value: 'firstName' },
        ],
      } as DocumentInput

      const mockResult: Document = {
        id: documentId,
        fields: documentToUpdate.fields,
        cacheId: '',
      }

      const mockService = update as jest.Mock

      mockService.mockImplementation(() => mockResult)

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          customMasterdata: {
            updatePartialDocument: jest.fn(),
            getDocument: jest.fn(),
          },
        },
      } as any

      // act
      const document = await mutations.updateDocument(
        {},
        { id: documentId, document: documentToUpdate },
        context
      )

      // assert
      expect(update).toHaveBeenCalledWith({
        client: context.clients.customMasterdata,
        id: documentId,
        documentInput: documentToUpdate,
      })

      expect(document).toBeTruthy()
    })
  })

  describe('deleteDocument', () => {
    it('should call delete document success', async () => {
      // arrange
      const token = 'mockToken'
      const documentId = '123'

      const mockResult: CacheableDocument = {
        id: documentId,
        cacheId: documentId,
      }

      const mockService = deleteDocument as jest.Mock

      mockService.mockImplementation(() => mockResult)

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          customMasterdata: {
            deleteDocument: jest.fn(),
          },
        },
      } as any

      // act
      const document = await mutations.deleteDocument(
        {},
        { id: documentId },
        context
      )

      // assert
      expect(deleteDocument).toHaveBeenCalledWith({
        client: context.clients.customMasterdata,
        id: documentId,
      })

      expect(document).toBeTruthy()
    })
  })
})
