import { Redis } from 'ioredis';
import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

import { IORedisAdapter } from '@infra-analysis/next-auth-redis';

const nextAuth = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  adapter: IORedisAdapter(new Redis(process.env.REDIS_URL)),
});

export default nextAuth;
