import { ID } from './scalars'

export interface User {

  /**
   * Indicate the profile picture file
   */
  profilePicture?: string
  /**
   * Indicates it is a company	
   */
  isCorporate?: boolean
  /**
   * Company (PJ) – Trade name	
   */
  tradeName?: string
  /**
   * URl to restock shopping cart with all the products	
   */
  rcLastCart?: string
  /**
   * Value of last cart	
   */
  rcLastCartValue?: string
  /**
   * ID of browsing script session	
   */
  rcLastSession?: string
  /**
   * Date of last browsing session saved	
   */
  rcLastSessionDate?: string
  /**
   * Registered phone no. of customer	
   */
  homePhone?: string
  phone?: string
  brandPurchasedTag?: string
  /**
   * List of last brands visited	
   */
  brandVisitedTag?: string
  categoryPurchasedTag?: string
  /**
   * List of last categories visited	
   */
  categoryVisitedTag?: string
  /**
   * List of IDs of last products visited	
   */
  departmentVisitedTag?: string
  productPurchasedTag?: string
  /**
   * List of IDs of last products visited	
   */
  productVisitedTag?: string
  /**
   * State registration of Company
   */
  stateRegistration?: string
  /**
   * Email address of customer	
   */
  email: string
  /**
   * ID of customer in CRM	
   */
  userId?: ID
  /**
   * First name of customer	
   */
  firstName?: string
  /**
   * Last name of customer	
   */
  lastName?: string
  /**
   * No. of CPF or CNPJ of customer	
   */
  document?: string
  /**
   * Opted to receive Newsletter	
   */
  isNewsletterOptIn?: boolean
  localeDefault?: string
  attach?: string
  approved?: string
  /**
   * User bithdate
   */
  birthDate?: string
  /**
   * Registered phone of the company.
   */
  businessPhone?: string
  /**
   * List of IDs of last SKUs in the cart	
   */
  cartTag?: string
  /**
   * List of Checkout steps completed by the customer	
   */
  checkoutTag?: string
  /**
   * CNPJ number
   */
  corporateDocument?: string
  /**
   * Company name
   */
  corporateName?: string
  /**
   * Type of document of customer
   */
  documentType?: string
  /**
   * Gender of customer
   */
  gender?: string
  /**
   * List of IDs of last unavailable products visited	
   */
  visitedProductWithStockOutSkusTag?: string
  customerClass?: string
  priceTables?: string
  id: ID
  accountId: string
  accountName: string
  dataEntityId: string
  /**
   * User who created the record	
   */
  createdBy?: string
  /**
   * createdIn
   */
  createdIn?: string
  /**
   * User who amended the record	
   */
  updatedBy?: string
  /**
   * Date of last update of record in CRM	
   */
  updatedIn?: string
  /**
   * User who amended the record	
   */
  lastInteractionBy?: string
  /**
   * Date of last update of record in CRM	
   */
  lastInteractionIn?: string
  followers?: string[]
  tags?: string[]
  autoFilter?: string
}
