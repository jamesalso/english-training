// import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// import dbConnectClient from '@/lib/api/dbConnectClient';

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    // adapter: MongoDBAdapter(dbConnectClient),
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? '',
            // allowDangerousEmailAccountLinking: true,
        }),
    ],
};

export default NextAuth(authOptions);
