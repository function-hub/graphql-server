import { ApolloServer } from 'apollo-server';

class Application {
    private apolloServer: ApolloServer;
    constructor() {
        this.apolloServer = this.createServer();
    }

    createServer() {
        return new ApolloServer({
            typeDefs,
            resolvers,
        });
    }

    async start() {
        return this.apolloServer.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    }
}
