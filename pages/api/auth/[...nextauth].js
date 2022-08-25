import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    })
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
// // login page
//     pages: {
//         signIn: '/login'
//     },
//   database: MongoDB
    database: process.env.NEXT_PUBLIC_DATABASE_URL
})