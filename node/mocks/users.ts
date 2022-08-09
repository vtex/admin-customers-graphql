import type { UserResponse } from '../typings/user'

const usersMock = {
  data: [
    {
      id: '3abf070b-60cf-11eb-82ac-1609bb837b4b',
      email: 'email@email.com',
      firstName: 'firstName 1',
      lastName: 'lastName 1',
      gender: undefined,
      userId: 'afc7378b-97ab-4126-aaf2-5ddde87555bc',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '+12122123213',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'e9c5c920-8cd3-11eb-82ac-12053e7146e5',
      email: 'email@email.com',
      firstName: 'firstName 2',
      lastName: 'lastName 2',
      gender: undefined,
      userId: 'b2eb8838-1137-4c4d-93d2-8d39f883af6a',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '+55111111111',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'fb69367c-60ce-11eb-82ac-0aee5a2079ab',
      email: 'email@email.com',
      firstName: 'firstName 3',
      lastName: 'lastName 3',
      gender: undefined,
      userId: '097826f7-d2c7-40f8-ae23-722058411f96',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '+12122222222',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '8d3bd626-77c0-11eb-82ac-0ac872e17d3b',
      email: 'email@email.com',
      firstName: 'firstName 4',
      lastName: 'lastName 4',
      gender: undefined,
      userId: '0baf0793-c07b-4c0e-bce3-dc2ba8daab59',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '+12122222222',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '20558544-be5c-11eb-82ac-12c719478bf3',
      email: 'email@email.com',
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '4628b754-bef2-11eb-82ac-124b52730f79',
      email: 'email@email.com',
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'fa603ff7-be6b-11eb-82ac-12cd6ad3c8bb',
      email: 'email@email.com',
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '15d91c10-7231-11eb-82ac-02cfcb69f8b7',
      email: 'email@email.com',
      firstName: 'firstName 5',
      lastName: 'lastName 5',
      gender: undefined,
      userId: '2285cc82-acf0-4455-979a-df4136994f63',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '999999999999',
      businessPhone: undefined,
      isNewsletterOptIn: true,
      stateRegistration: undefined,
    },
    {
      id: '6e0f0237-60d4-11eb-82ac-0a3f5e074243',
      email: 'email@email.com',
      firstName: 'firstName 6',
      lastName: 'lastName 6',
      gender: undefined,
      userId: '88866217-d00b-4e7b-84fd-b9893e29fdcf',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '+12199999999',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'e14ed553-bef4-11eb-82ac-02c409b99d9d',
      email: 'email@email.com',
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '8bd57889-be6d-11eb-82ac-0a11978d8baf',
      email: 'email@email.com',
      firstName: 'firstName 7',
      lastName: 'lastName 7',
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: 'cnpj',
      birthDate: undefined,
      corporateName: 'Razao aqui',
      isCorporate: true,
      corporateDocument: '60881503000145',
      phone: '+5548991221611',
      homePhone: '+5548991221611',
      businessPhone: '+5548991221611',
      isNewsletterOptIn: false,
      stateRegistration: 'Isento',
    },
    {
      id: 'fc4af4ab-6b1f-11eb-82ac-16602c0d9d51',
      email: 'email@email.com',
      firstName: 'firstName 8',
      lastName: 'lastName 8',
      gender: undefined,
      userId: '2fb28f54-4f17-4e81-b6be-e01b4fea03f4',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: false,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: '19999999999',
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '35682d0b-8741-11eb-82ac-1280868cca19',
      email: 'email@email.com',
      firstName: 'firstName 9',
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'd7659777-b97f-11eb-82ac-0a9b63dfc6c7',
      email: 'email@email.com',
      firstName: 'firstName 10',
      lastName: 'lastName 10',
      gender: undefined,
      userId: '23c8aaf4-900d-4491-baaf-a85864bab6d6',
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '7ca33222-ce9d-11eb-82ac-12e0a8646105',
      email: 'email@email.com',
      firstName: 'firstName 11',
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: 'c9535ace-ce9e-11eb-82ac-0eaa7543adcb',
      email: 'email@email.com',
      firstName: 'firstName 12',
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
    {
      id: '358bec64-d296-11eb-82ac-1278b8587e5d',
      email: 'email@email.com',
      firstName: undefined,
      lastName: undefined,
      gender: undefined,
      userId: undefined,
      document: undefined,
      documentType: undefined,
      birthDate: undefined,
      corporateName: undefined,
      isCorporate: undefined,
      corporateDocument: undefined,
      phone: undefined,
      homePhone: undefined,
      businessPhone: undefined,
      isNewsletterOptIn: false,
      stateRegistration: undefined,
    },
  ],
  pagination: {
    page: 1,
    pageSize: 10,
    total: 17,
  },
} as UserResponse

export default usersMock
