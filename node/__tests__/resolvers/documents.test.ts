import { AuthenticationError } from '@vtex/api'

import { mutations } from '../../resolvers/documents'
import {
  DocumentInput,
  DocumentPOSTResponse,
  Document,
  CacheableDocument,
} from '../../typings/document'
import { parseFieldsToJson } from '../../utils'

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

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          documents: {
            save: jest.fn().mockImplementation(() => mockResult),
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
      expect(context.clients.documents.save).toHaveBeenCalledWith(
        parseFieldsToJson(documentToAdd.fields),
        token
      )
      expect(document).toBeTruthy()
    })

    it('should call save and get error without token', async () => {
      // arrange
      const context = {
        cookies: {
          get: jest.fn(),
        },
        clients: {
          documents: {
            save: jest.fn(),
          },
        },
      } as any

      expect(() =>
        // act
        mutations.saveDocument({}, { document: { fields: [] } }, context)
      )
        // assert
        .toThrow(new AuthenticationError('User is not logged in'))
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

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          documents: {
            update: jest.fn(),
            get: jest.fn().mockImplementation(() => mockResult),
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
      expect(context.clients.documents.update).toHaveBeenCalledWith(
        token,
        parseFieldsToJson(documentToUpdate.fields),
        documentId
      )

      expect(context.clients.documents.get).toHaveBeenCalledWith(
        documentId,
        token
      )
      expect(document).toBeTruthy()
    })

    it('should call update and get error without token', async () => {
      // arrange
      const context = {
        cookies: {
          get: jest.fn(),
        },
        clients: {
          documents: {
            update: jest.fn(),
            get: jest.fn(),
          },
        },
      } as any

      await expect(
        // act
        mutations.updateDocument(
          {},
          { id: '', document: { fields: [] } },
          context
        )
      )
        // assert
        .rejects.toThrow(new AuthenticationError('User is not logged in'))
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

      const context = {
        cookies: {
          get: jest.fn().mockImplementation(() => token),
        },
        clients: {
          documents: {
            delete: jest.fn().mockImplementation(() => mockResult),
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
      expect(context.clients.documents.delete).toHaveBeenCalledWith(
        documentId,
        token
      )
      expect(document).toBeTruthy()
    })

    it('should call delete and get error without token', async () => {
      // arrange
      const context = {
        cookies: {
          get: jest.fn(),
        },
        clients: {
          documents: {
            update: jest.fn(),
            get: jest.fn(),
          },
        },
      } as any

      await expect(
        // act
        mutations.deleteDocument({}, { id: '' }, context)
      )
        // assert
        .rejects.toThrow(new AuthenticationError('User is not logged in'))
    })
  })
})
