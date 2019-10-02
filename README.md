## package list

```
apollo-server graphql
```

## Code format

Please use prettier + .prettierrc config file to format your code before run tslint

## Struct

1.Sequelize
2.Apollo
3.Faker
4.ts

## Graphql

//最近有点心浮气躁

apollo graphql 实例化详解

### modules 详解

modules?: GraphQLSchemaModule[]; { typeDef, resolvers }

typeDefs?: DocumentNode | Array<DocumentNode>;

parseOptions?: GraphQLParseOptions;
resolvers?: IResolvers;
schema?: GraphQLSchema;
schemaDirectives?: Record<string, typeof SchemaDirectiveVisitor>;
context?: Context | ContextFunction;
introspection?: boolean;
mocks?: boolean | IMocks;
mockEntireSchema?: boolean;
engine?: boolean | EngineReportingOptions<Context>;
extensions?: Array<() => GraphQLExtension>;
cacheControl?: CacheControlExtensionOptions | boolean;
plugins?: PluginDefinition[];
persistedQueries?: PersistedQueryOptions | false;
subscriptions?: Partial<SubscriptionServerOptions> | string | false;
//https://github.com/jaydenseric/graphql-upload#type-uploadoptions
uploads?: boolean | FileUploadOptions;
playground?: PlaygroundConfig;
