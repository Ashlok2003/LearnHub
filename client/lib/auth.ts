import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { emailOTP } from 'better-auth/plugins';
import { prisma } from './db';
import { env } from './env';
import { resend } from './resend';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await resend.emails.send({
          from: 'LearnHub <onboarding@resend.dev>',
          to: email,
          subject: 'LearnHub - Verify your email',
          html: `
          <div style="font-family: sans-serif; font-size: 16px; color: #333">
            <p>Hi,</p>
            <p>Your OTP for <strong>${type}</strong> is:</p>
            <h2 style="color: #0070f3;">${otp}</h2>
            <p>This code will expire in 10 minutes.</p>
            <br />
            <p>Thanks,<br />LearnHub Team</p>
          </div>
        `,
        });
      },
    }),
  ],
});
