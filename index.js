import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gatewayPort = 5000;

const gateway = new ApolloGateway({
    serviceList: [
        { name: "movies", url: "http://localhost:3000" },
        { name: "pricing", url: "http://localhost:4000" },
    ],
});

const gatewayServer = new ApolloServer({
    gateway,
    subscriptions: false,
});

gatewayServer.listen({ port: gatewayPort }).then(({ url }) => {
    console.log(`Supergraph with gateway has successfully started and listening at ${url}`);
});
