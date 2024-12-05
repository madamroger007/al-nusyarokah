import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

class InvalidLoginError extends CredentialsSignin {
  code = 'Username atau password salah';
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      authorize: async (credentials) => {
        const admin = {
          id: process.env.AUTH_ADMIN_USERNAME,
          name: process.env.AUTH_ADMIN_NAME,
          username: process.env.AUTH_ADMIN_USERNAME,
          password: process.env.AUTH_ADMIN_PASSWORD,
        };

        if (
          credentials.username !== admin.username ||
          credentials.password !== admin.password
        ) {
          throw new InvalidLoginError();
        }

        return admin;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
