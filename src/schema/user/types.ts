import { gql } from 'apollo-server';

const typeDef = gql`
    type User {
        name: String
        email: String
    }
`;
