export default {
    Query: {
        getAutoLoginToken: async (parent: void) => {
            try {
                return { success: true }
            } catch (error) {
                return new Error(error)
            }
        },
    },
    Mutation: {
        autoLogin: async (parent: void,) => {
            try {
                return { msg: 'Login successful', success: true }
            } catch (error) {
                return new Error(error)
            }
        },
    }
}