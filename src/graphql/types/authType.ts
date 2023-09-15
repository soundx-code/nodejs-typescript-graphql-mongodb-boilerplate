export default `
    type User {
        userId: ID!
        email: String
        firstName: String!
        lastName: String!
        mobileNumber: String
        password: String!
    }

    type Auth {
        user: User
        token: String
        msg: String!
        success: Boolean!
    }

    type Query {
        getAutoLoginToken: Auth!
    }

    type Mutation {
        signup(
            firstName: String!
            lastName: String!
            email: String!
            mobileNumber: String
            password: String!
        ): Auth!

        autoLogin(
            autoLoginToken: String!
        ): Auth!

        login(
            email: String!
            password: String!
        ): Auth!

        logout: Boolean!
    }
`