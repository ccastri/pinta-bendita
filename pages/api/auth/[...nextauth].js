import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// Configure one or more authentication providers
export default NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin'
    },

    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();

            session.user.uid = token.sub;
            return session
        }
    }
})
