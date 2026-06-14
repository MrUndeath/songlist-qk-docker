import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const requireEnv = (value: string | undefined, name: string) => {
  if (!value) {
    throw new Error(`${name} must be configured.`);
  }

  return value;
};

export const supabaseConfig = {
  url: requireEnv(publicEnv.PUBLIC_SUPABASE_URL, 'PUBLIC_SUPABASE_URL'),
  publishableKey: requireEnv(publicEnv.PUBLIC_SUPABASE_PUBLISHABLE_KEY, 'PUBLIC_SUPABASE_PUBLISHABLE_KEY'),
  secretKey: requireEnv(privateEnv.SUPABASE_SECRET_KEY, 'SUPABASE_SECRET_KEY')
};

export const authSecret = requireEnv(privateEnv.AUTH_SECRET, 'AUTH_SECRET');
