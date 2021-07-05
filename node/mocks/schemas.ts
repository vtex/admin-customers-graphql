import { SchemaResponse } from '../typings/schema'

const schemasMock = {
  properties: {
    id: {
      type: 'string',
      title: 'Id do documento',
      format: undefined,
      maxLength: 100,
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      maxLength: undefined,
    },
    firstName: {
      type: 'string',
      title: 'Nome',
      format: undefined,
      maxLength: 750,
    },
    lastName: {
      type: 'string',
      title: 'Sobrenome',
      format: undefined,
      maxLength: 750,
    },
    gender: {
      type: 'string',
      title: 'Sexo',
      format: undefined,
      maxLength: 10,
    },
    isCorporate: {
      type: 'boolean',
      title: 'É Empresa?',
      format: undefined,
      maxLength: undefined,
    },
    document: {
      type: 'string',
      title: 'Documento',
      format: undefined,
      maxLength: 50,
    },
    documentType: {
      type: 'string',
      title: 'Tipo documento',
      format: undefined,
      maxLength: 50,
    },
    birthDate: {
      type: 'string',
      title: 'Data de nascimento',
      format: 'date-time',
      maxLength: undefined,
    },
    corporateName: {
      type: 'string',
      title: 'Razão Social',
      format: undefined,
      maxLength: 750,
    },
    corporateDocument: {
      type: 'string',
      title: 'CNPJ',
      format: undefined,
      maxLength: 50,
    },
    tradeName: {
      type: 'string',
      title: 'Nome Fantasia',
      format: undefined,
      maxLength: 750,
    },
    businessPhone: {
      type: 'string',
      title: 'Telefone Comercial',
      format: undefined,
      maxLength: 100,
    },
    isNewsletterOptIn: {
      type: 'boolean',
      title: 'Recebe Newsletter?',
      format: undefined,
      maxLength: undefined,
    },
    stateRegistration: {
      type: 'string',
      title: 'Inscrição Estadual',
      format: undefined,
      maxLength: 750,
    },
  },
  required: ['email', 'id', 'accountId', 'accountName', 'dataEntityId'],
  vIndexed: [
    'b2b',
    'teste',
    'brandVisitedTag',
    'categoryVisitedTag',
    'departmentVisitedTag',
    'productVisitedTag',
    'email',
    'userId',
    'firstName',
    'lastName',
    'document',
    'isNewsletterOptIn',
    'localeDefault',
    'approved',
    'id',
    'accountName',
    'dataEntityId',
    'createdBy',
    'createdIn',
    'updatedBy',
    'updatedIn',
    'lastInteractionBy',
    'lastInteractionIn',
    'followers',
    'tags',
  ],
} as SchemaResponse

export default schemasMock