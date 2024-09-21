import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GET_USER from '../getUser';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log("Credentials received:", credentials);
        try {       
            const user = await GET_USER(credentials.email);
            if (!user) {
                throw new Error('User not found');
            }
            const isValidPassword = await compare(credentials.password, user.password);
            if (!isValidPassword) {
                throw new Error('Invalid password');
            }
            return user;
        } catch (error) {
            console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.email;
        token.email = user.email;
        token.name = user.firstname+' '+user.lastname;
      }
      console.log("JWT token:", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as POST, handler as GET };
