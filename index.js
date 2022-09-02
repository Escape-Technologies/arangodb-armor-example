'use strict';
const graphqlSchema = require('./schema');
const graphql = require('graphql');
const createGraphqlRouter = require('@arangodb/foxx/graphql');
const gqlarmor = require('@escape.tech/graphql-armor');

const armor = new gqlarmor.ApolloArmor();
const enhancements = armor.protect();

const router = createGraphqlRouter({
  schema: graphqlSchema,
  graphiql: true,
  graphql: graphql,
  plugins: enhancements.plugins,
  validationRules: enhancements.validationRules,
})
.summary('GraphQL endpoint')
.description('GraphQL endpoint for the Star Wars GraphQL example.');

module.context.use(router);