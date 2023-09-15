export const typeDefs = `
    type User {
        id: String!
        email: String!
    }

    type Query {
        user(id: String!): User
        users: [User]
    }
`;

export const resolvers = {
    Query: {
        users() {
            return [{}]
        },
        user() {}
    },
}