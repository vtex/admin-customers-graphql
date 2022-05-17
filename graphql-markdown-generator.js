const { execSync } = require('child_process')

const argv = require('minimist')(process.argv.slice(2))

const DEFAULT_GRAPHQL_PATH = './graphql/**/*.{gql,graphql}'
const DEFAULT_MERGED_PATH = './merged.graphql'
const DEFAULT_MARKDOWN_PATH = './schema.md'

const GRAPHQL_ARG = argv['graphql-path']
const MERGED_ARG = argv['merged-path']
const MARKDOWN_ARG = argv['markdown-path']

const GRAPHQL_PATH = GRAPHQL_ARG || DEFAULT_GRAPHQL_PATH
const MERGED_PATH = MERGED_ARG || DEFAULT_MERGED_PATH
const MARKDOWN_PATH = MARKDOWN_ARG || DEFAULT_MARKDOWN_PATH

execSync(
  `graphql-schema-utilities -s "${GRAPHQL_PATH}" -o ${MERGED_PATH} && graphql-markdown ${MERGED_PATH} > ${MARKDOWN_PATH} && rm ${MERGED_PATH}`
)
