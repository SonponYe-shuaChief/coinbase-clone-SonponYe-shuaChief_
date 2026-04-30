import { createContext, useContext, useEffect, useState } from "react";
import { authApi, normalizeAuthUser } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const profile = await authApi.profile();
      setUser(normalizeAuthUser(profile));
    } catch (error) {
      if (error.status !== 401) {
        console.error("Failed to load user profile", error);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const signIn = async (payload) => {
    await authApi.login(payload);
    await refreshUser();
  };

  const signUp = async (payload) => {
    await authApi.register(payload);
    await refreshUser();
  };

  const signOut = async () => {
    try {
      if (authApi && typeof authApi.logout === "function") {
        await authApi.logout();
      }
    } catch (e) {
      console.warn("logout failed", e);
    }

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        refreshUser,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
