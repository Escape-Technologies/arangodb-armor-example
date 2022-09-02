'use strict';
const graphqlSchema = require('./schema');
const graphql = require('graphql');
const createGraphqlRouter = require('@arangodb/foxx/graphql');
const gqlArmor = require('@escape.tech/graphql-armor');

const armor = new gqlArmor.ApolloArmor({
  maxDirectives: {
    n: 10,
  },
  maxDepth: {
    n: 4,
  },
  maxAliases: {
    n: 2,
  },
  costLimit: {
    maxCost: 100,
    objectCost: 1,
    scalarCost: 1,
    depthCostFactor: 2,
    ignoreIntrospection: true,
  }
});
const enhancements = armor.protect();

const router = createGraphqlRouter({
  schema: graphqlSchema,
  graphiql: true,
  graphql: graphql,
  plugins: enhancements.plugins,
  validationRules: enhancements.validationRules,
  formatError: (error) => {
    error.message = error.message.replace(/Did you mean ".+"/g, '**Hidden suggestion**');
    return error;
  },
})
.summary('GraphQL endpoint')
.description('GraphQL endpoint for the Star Wars GraphQL example.');

module.context.use(router);