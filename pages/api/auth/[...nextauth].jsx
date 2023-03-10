import NextAuth from 'next-auth'
import Auth0Provider from "next-auth/providers/auth0";
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter} from '@next-auth/mongodb-adapter'
import clientPromise from './lib/mongodb'


export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
  ],
  pages: {
    signIn: "/signin"
  }, 
  session : {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET
})