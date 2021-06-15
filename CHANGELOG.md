# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2021-06-15

### Added
- Graphql dependence
- Graphql schema with file .graphql
- Id parameter in `updateProfile` mutation query
- Types on resolvers response

### Changed
- `node` version
- `@vtex/api` version

### Removed
- `typedql` dependence

## [0.11.1] - 2020-07-03

### Fixed

- Use list schema API instead of getting it directly

## [0.11.0] - 2019-07-03

### Changed

- Better error handling for duplicate emails.

## [0.10.0] - 2019-05-08

## [0.9.0] - 2019-05-08

## [0.8.1] - 2019-05-07

### Changed

- Fix pagination error in `user.get`.

## [0.8.0] - 2019-05-03

### Added

- Add `filter` variable in `totalNumberOfUsers` query.

## [0.7.2] - 2019-05-03

### Changed

- Fix pagination error in `user.get`.

## [0.7.1] - 2019-05-02

### Added

- Support for custom fields in `getSchema` Query.

## [0.7.0] - 2019-05-02

### Added

- Add `totalNumberOfUsers` query.
- Rename queries removing `get` from them.

## [0.6.1] - 2019-04-30

### Changed

- Authentication on all request

## [0.6.0] - 2019-04-29

### Added

- Add `getUsers` query.

## [0.5.0] - 2019-04-25

### Added

- Add `deleteDocument` mutation.

## [0.4.0] - 2019-04-25

### Added

- Add `saveDocument` and `updateDocument` mutations.

## [0.3.0] - 2019-04-25

### Changed

- Use ESLint instead of TSLint.

## [0.2.0] - 2019-04-25

### Added

- Query `getSchema`.

## [0.1.0] - 2019-04-22

### Added

- Project initial setup
