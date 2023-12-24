import { db } from './db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { AuthOptions, NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github';

export const authOptions : NextAuthOptions = {
  // adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  
  providers : [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

      GithubProvider({
          clientId : 'Iv1.7be95343444526ef',
          clientSecret : '5fb1689aa45273422e8dbe5bcc8456eaaac12cd3'
      })
  ],
  callbacks: {
      async session({ token, session }: any) {
        if (token) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.email = token.email
          session.user.image = token.picture
          session.user.username = token.username
        }
  
  
        
        return session
      },
  
      async jwt({ token, user }) {
        const dbUser = await db.user.findFirst({
          where: {
            email: token.email,
          },
        })
  
        if (!dbUser) {
          token.id = user!.id
          return token
        }
  
        if (!dbUser.username) {
          await db.user.update({
            where: {
              id: dbUser.id,
            },
            data: {
              username: nanoid(10),
            },
          })
        }
  
        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          picture: dbUser.image,
          username: dbUser.username,
        }
      },
      async redirect({ url, baseUrl }) {
        return 'http://localhost:3000/';
      },
    },
  secret : 'default_secret_Key'
}

export const getAuthSession = () => getServerSession(authOptions)