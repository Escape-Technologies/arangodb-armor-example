'use strict';
const schema = require('./schema');
const graphql = require('graphql');
const createGraphqlRouter = require('@arangodb/foxx/graphql');

const router = createGraphqlRouter({schema,
  graphiql: true,
  graphql: graphql,
})
.summary('GraphQL endpoint')
.description('GraphQL endpoint for the Star Wars GraphQL example.');

module.context.use(router);