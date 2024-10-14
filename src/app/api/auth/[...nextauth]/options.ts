import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcryptjs";
import Admin from "@/app/models/Admin";

interface User {
    id: number;
    email: string;
    username: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                try {
                    console.log("Authorize function called with credentials:", credentials);
                    const admin = await Admin.findOne({
                        where: { email: credentials.email },
                    }) as Admin & { password: string };
                    if (!admin) {
                        throw new Error("Invalid email or user not found");
                    }
                    const isMatch = await compareSync(credentials.password, admin.password);
                    console.log(isMatch);
                    if (!isMatch) {
                        throw new Error("Incorrect password");
                    }
                    return { id: admin.id, email: admin.email, username: admin.username };
                } catch (error: any) {
                    console.error("Authorization error:", error.message);
                    throw new Error("Error during authorization. Please check your credentials.");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as number;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as number,
                    username: token.username,
                };
            }
            return session;
        },
    },
    pages: {
        signIn: "/admin",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
