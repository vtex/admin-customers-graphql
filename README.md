##  ⚠️ Maintenance ⚠️
*After March 01 of 2023, this application will no longer be maintained by the RPT BR team. Maintenance will be the responsibility of the ecosystem, everyone will be able to make a branch with the changes or improvements they want to make, make a pull request and we will approve it.*


# admin-customers-graphql
This project is a GraphQL API to manage and consume customers informations, it is also possible to list default and custom fields that were configured on Masterdata schema.

The implementation is based on MasterData structure, and manage the documents with acronym "CL".

<hr>

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [CacheableDocument](#cacheabledocument)
    * [CustomField](#customfield)
    * [Document](#document)
    * [DocumentPOSTResponse](#documentpostresponse)
    * [Field](#field)
    * [Pagination](#pagination)
    * [Properties](#properties)
    * [Property](#property)
    * [SchemaResponse](#schemaresponse)
    * [User](#user)
    * [UserPageResponse](#userpageresponse)
  * [Inputs](#inputs)
    * [DocumentInput](#documentinput)
    * [FieldInput](#fieldinput)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [ID](#id)
    * [Int](#int)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>schema</strong></td>
<td valign="top"><a href="#schemaresponse">SchemaResponse</a>!</td>
<td>

Query to get default and custom fields created on masterdata with acronym "CL"

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top"><a href="#userpageresponse">UserPageResponse</a>!</td>
<td>

Query to list customers with pagination and filter

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">perPage</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageNumber</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filter</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>saveDocument</strong></td>
<td valign="top"><a href="#documentpostresponse">DocumentPOSTResponse</a>!</td>
<td>

Create a new customer with a list based on key and value. A field with key "email" is required.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">document</td>
<td valign="top"><a href="#documentinput">DocumentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDocument</strong></td>
<td valign="top"><a href="#document">Document</a>!</td>
<td>

Update a customer with a list based on key and value. The document id is required.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">document</td>
<td valign="top"><a href="#documentinput">DocumentInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDocument</strong></td>
<td valign="top"><a href="#cacheabledocument">CacheableDocument</a>!</td>
<td>

Delete a customer based on document id

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### CacheableDocument

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cacheId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

id is used as cacheId

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Document id

</td>
</tr>
</tbody>
</table>

### CustomField

Custom field in a key/value format

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key that identify a custom field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Value of custom field

</td>
</tr>
</tbody>
</table>

### Document

Document with fields that was updated

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>!]!</td>
<td>

Fields were updated

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cacheId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

id is used as cacheId

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Document id

</td>
</tr>
</tbody>
</table>

### DocumentPOSTResponse

Response on create a new customer document

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A URL to access the created document by API

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>documentId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Document id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cacheId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

id is used as cacheId

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Mutation id

</td>
</tr>
</tbody>
</table>

### Field

Field in a key/value format

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Key that identify the field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Value of field

</td>
</tr>
</tbody>
</table>

### Pagination

A pagination structure

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>page</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Page number

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageSize</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Number of items per page

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Total number of items

</td>
</tr>
</tbody>
</table>

### Properties

Provide the properties about each field

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

User ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

First name of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Last name of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Email address of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>document</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

No. of CPF or CNPJ of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

ID of customer in CRM

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>birthDate</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

User bithdate

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Phone no. of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>businessPhone</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Registered phone of the company.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tradeName</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Company (PJ) – Trade name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>corporateName</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Company name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCorporate</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Indicates if it is a company

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Gender of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homePhone</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Registered phone no. of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateRegistration</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

State registration of Company

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>documentType</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Type of document of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>corporateDocument</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

CNPJ number

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isNewsletterOptIn</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Opted to receive Newsletter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastCart</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

URl to restock shopping cart with all the products

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastSession</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

ID of browsing script session

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastCartValue</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Value of last cart

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastSessionDate</strong></td>
<td valign="top"><a href="#property">Property</a>!</td>
<td>

Date of last browsing session saved

</td>
</tr>
</tbody>
</table>

### Property

Property contains fields with informations about custom fields

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Type of field like string/boolean/integer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Title of field like a label

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>format</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Format of field like date-time/email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>maxLength</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Max length of field

</td>
</tr>
</tbody>
</table>

### SchemaResponse

CRM Schema

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>properties</strong></td>
<td valign="top"><a href="#properties">Properties</a>!</td>
<td>

Properties of Schema

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>required</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Required fields of Schema

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>vIndexed</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

Indexed fields of Schema

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customFields</strong></td>
<td valign="top">[<a href="#customfield">CustomField</a>!]</td>
<td>

Custom fields created by the user

</td>
</tr>
</tbody>
</table>

### User

A user contains default properties of masterdata entity

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

User ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isCorporate</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Indicates if it is a company

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tradeName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company (PJ) – Trade name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>homePhone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Registered phone no. of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Phone no. of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stateRegistration</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

State registration of Company

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Email address of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

ID of customer in CRM

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

First name of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Last name of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>document</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

No. of CPF or CNPJ of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isNewsletterOptIn</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Opted to receive Newsletter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>birthDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User bithdate

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>businessPhone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Registered phone of the company.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>corporateDocument</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

CNPJ number

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>corporateName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>documentType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Type of document of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Gender of customer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastCart</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

URl to restock shopping cart with all the products

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastCartValue</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Value of last cart

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastSession</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

ID of browsing script session

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rcLastSessionDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Date of last browsing session saved

</td>
</tr>
</tbody>
</table>

### UserPageResponse

A entity that contains a list with users and a pagination properties

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>data</strong></td>
<td valign="top">[<a href="#user">User</a>!]!</td>
<td>

List with users

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pagination</strong></td>
<td valign="top"><a href="#pagination">Pagination</a>!</td>
<td>

Pagination info

</td>
</tr>
</tbody>
</table>

## Inputs

### DocumentInput

Fields to create or update customer document

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#fieldinput">FieldInput</a>!]!</td>
<td>

Fields in a key/value format

</td>
</tr>
</tbody>
</table>

### FieldInput

Field in a key/value format

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Key that identify the field

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Value of field

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
