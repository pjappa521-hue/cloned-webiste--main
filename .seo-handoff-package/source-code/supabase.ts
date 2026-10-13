import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { User, Session } from '@supabase/supabase-js';

// Environment variables configured for Supabase integration (supports Vite browser and Node.js runtimes)
const env = (typeof import.meta !== 'undefined' && (import.meta as any).env) ? (import.meta as any).env : (typeof process !== 'undefined' ? process.env : {});
const supabaseUrl =
  env.VITE_SUPABASE_URL || 'https://lqqajbukycsqcjdtqcqs.supabase.co';
const supabasePublishableKey =
  env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_jAbxhWqjwMsiUrSGEz9D7Q_oN1-qo_X';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

/**
 * Centralized Supabase Client instance
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'the_internet_ads_supabase_auth_token',
  },
});

/**
 * Designated SEO Administrator identity constants.
 *
 * CRITICAL SECURITY ARCHITECTURE:
 * - The administrator identity is anchored to Supabase Auth User ID:
 *   "5153fbf1-3199-47ee-aaae-afd03a12e804"
 * - Possession or knowledge of this UUID does NOT grant authorization.
 * - Authorization strictly requires an authentic, cryptographically signed Supabase Auth JWT
 *   issued by Supabase when this exact user successfully authenticates.
 * - Any user whose authenticated user.id !== DESIGNATED_SEO_ADMIN_USER_ID is denied access.
 */
export const DESIGNATED_SEO_ADMIN_USER_ID = '5153fbf1-3199-47ee-aaae-afd03a12e804';
export const DESIGNATED_SEO_ADMIN_EMAIL = 'pjappa521@gmail.com';

export interface AdminIdentityVerificationResult {
  isAuthenticated: boolean;
  isDesignatedAdmin: boolean;
  userId: string | null;
  userEmail: string | null;
  statusMessage: string;
}

/**
 * Test connectivity to the Supabase endpoint
 */
export async function testSupabaseConnection(): Promise<{
  ok: boolean;
  status: 'connected' | 'auth_available_rest_restricted' | 'failed';
  message: string;
  authConfig?: any;
}> {
  try {
    if (!supabaseUrl || !supabasePublishableKey) {
      return {
        ok: false,
        status: 'failed',
        message: 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY environment variables',
      };
    }

    // Probe Supabase Auth settings endpoint
    const authProbe = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: {
        apikey: supabasePublishableKey,
        Authorization: `Bearer ${supabasePublishableKey}`,
      },
    });

    if (authProbe.ok) {
      const authSettings = await authProbe.json();
      return {
        ok: true,
        status: 'connected',
        message: 'Successfully connected to Supabase Auth service',
        authConfig: {
          emailAuthEnabled: authSettings?.external?.email ?? true,
          disableSignup: authSettings?.disable_signup ?? false,
        },
      };
    }

    return {
      ok: false,
      status: 'failed',
      message: `Supabase Auth service responded with HTTP status ${authProbe.status} ${authProbe.statusText}`,
    };
  } catch (error) {
    return {
      ok: false,
      status: 'failed',
      message: error instanceof Error ? error.message : 'Unknown network error connecting to Supabase',
    };
  }
}

/**
 * Verifies if a given Supabase User matches the designated SEO administrator identity.
 * Evaluates the cryptographically verified user object returned by Supabase Auth.
 */
export function verifySeoAdminIdentity(user: User | null): AdminIdentityVerificationResult {
  if (!user) {
    return {
      isAuthenticated: false,
      isDesignatedAdmin: false,
      userId: null,
      userEmail: null,
      statusMessage: 'No active Supabase authentication session. Please sign in with your credentials.',
    };
  }

  const isDesignated = user.id === DESIGNATED_SEO_ADMIN_USER_ID;

  if (isDesignated) {
    return {
      isAuthenticated: true,
      isDesignatedAdmin: true,
      userId: user.id,
      userEmail: user.email || null,
      statusMessage: 'Authenticated as designated SEO Administrator.',
    };
  }

  return {
    isAuthenticated: true,
    isDesignatedAdmin: false,
    userId: user.id,
    userEmail: user.email || null,
    statusMessage: `User authenticated (${user.email || user.id}) but is NOT authorized for SEO Administration. Access restricted.`,
  };
}

/**
 * Retrieves the current session and evaluates the administrator identity status.
 */
export async function getAdminAuthStatus(): Promise<AdminIdentityVerificationResult> {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !session?.user) {
      return {
        isAuthenticated: false,
        isDesignatedAdmin: false,
        userId: null,
        userEmail: null,
        statusMessage: error ? error.message : 'No active session',
      };
    }

    return verifySeoAdminIdentity(session.user);
  } catch (err) {
    return {
      isAuthenticated: false,
      isDesignatedAdmin: false,
      userId: null,
      userEmail: null,
      statusMessage: err instanceof Error ? err.message : 'Error checking authentication status',
    };
  }
}
