import { createContext } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  onSignIn: () => null,
  onSignOut: () => null,
});
