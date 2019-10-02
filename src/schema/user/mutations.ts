import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        userId: ID!
        name: String;
        email: String;
    }
`;
