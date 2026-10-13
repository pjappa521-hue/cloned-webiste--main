import { createClient } from "@supabase/supabase-js";
const env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : typeof process !== "undefined" ? process.env : {};
const supabaseUrl = env.VITE_SUPABASE_URL || "https://lqqajbukycsqcjdtqcqs.supabase.co";
const supabasePublishableKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_jAbxhWqjwMsiUrSGEz9D7Q_oN1-qo_X";
const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);
const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: "the_internet_ads_supabase_auth_token"
  }
});
const DESIGNATED_SEO_ADMIN_USER_ID = "5153fbf1-3199-47ee-aaae-afd03a12e804";
const DESIGNATED_SEO_ADMIN_EMAIL = "pjappa521@gmail.com";
async function testSupabaseConnection() {
  try {
    if (!supabaseUrl || !supabasePublishableKey) {
      return {
        ok: false,
        status: "failed",
        message: "Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY environment variables"
      };
    }
    const authProbe = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: {
        apikey: supabasePublishableKey,
        Authorization: `Bearer ${supabasePublishableKey}`
      }
    });
    if (authProbe.ok) {
      const authSettings = await authProbe.json();
      return {
        ok: true,
        status: "connected",
        message: "Successfully connected to Supabase Auth service",
        authConfig: {
          emailAuthEnabled: authSettings?.external?.email ?? true,
          disableSignup: authSettings?.disable_signup ?? false
        }
      };
    }
    return {
      ok: false,
      status: "failed",
      message: `Supabase Auth service responded with HTTP status ${authProbe.status} ${authProbe.statusText}`
    };
  } catch (error) {
    return {
      ok: false,
      status: "failed",
      message: error instanceof Error ? error.message : "Unknown network error connecting to Supabase"
    };
  }
}
function verifySeoAdminIdentity(user) {
  if (!user) {
    return {
      isAuthenticated: false,
      isDesignatedAdmin: false,
      userId: null,
      userEmail: null,
      statusMessage: "No active Supabase authentication session. Please sign in with your credentials."
    };
  }
  const isDesignated = user.id === DESIGNATED_SEO_ADMIN_USER_ID;
  if (isDesignated) {
    return {
      isAuthenticated: true,
      isDesignatedAdmin: true,
      userId: user.id,
      userEmail: user.email || null,
      statusMessage: "Authenticated as designated SEO Administrator."
    };
  }
  return {
    isAuthenticated: true,
    isDesignatedAdmin: false,
    userId: user.id,
    userEmail: user.email || null,
    statusMessage: `User authenticated (${user.email || user.id}) but is NOT authorized for SEO Administration. Access restricted.`
  };
}
async function getAdminAuthStatus() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error || !session?.user) {
      return {
        isAuthenticated: false,
        isDesignatedAdmin: false,
        userId: null,
        userEmail: null,
        statusMessage: error ? error.message : "No active session"
      };
    }
    return verifySeoAdminIdentity(session.user);
  } catch (err) {
    return {
      isAuthenticated: false,
      isDesignatedAdmin: false,
      userId: null,
      userEmail: null,
      statusMessage: err instanceof Error ? err.message : "Error checking authentication status"
    };
  }
}
export {
  DESIGNATED_SEO_ADMIN_EMAIL,
  DESIGNATED_SEO_ADMIN_USER_ID,
  getAdminAuthStatus,
  isSupabaseConfigured,
  supabase,
  testSupabaseConnection,
  verifySeoAdminIdentity
};
