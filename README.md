# arangodb-armor-example

## Installation

```bash
yarn
docker run -p 8529:8529 -e ARANGO_ROOT_PASSWORD=openSesame arangodb/arangodb:3.9.2
zip -r ../out.zip arangodb-armor-example
```

1. Head to Webview: [http://localhost:8529](http://localhost:8529)

2. Credentials: `root:openSesame`

3. Create new service using Github and `Escape-Technologies/arangodb-armor-example` path.

## Sources

Scripts and schema from: [https://github.com/arangodb-foxx/demo-graphql](https://github.com/arangodb-foxx/demo-graphql)

## Testing

```GraphQL
query {
    __typename
}
```

```GraphQL
query {
  hero(episode: "NewHope") {
    name
    friends(species: DROID) {
      name
    }
  }
}
```
