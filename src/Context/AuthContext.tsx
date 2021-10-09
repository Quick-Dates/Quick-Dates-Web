import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import { ProfileEnum } from '../enum/profileEnum';
import api from '../services/api';
import AuthService from '../services/authService';

interface IUser {
  id: string,
  name: string,
  profile: ProfileEnum,
  email: string,
  course: string,
  tokenSuap: string,
}

interface AuthState {
  token: string;
  user: IUser;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials, profile: 'teachers' | 'students'): Promise<{success: boolean}>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@QuickDates: ACESS_TOKEN');
    const user = localStorage.getItem('@QuickDates: USER');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }, profile) => {
    const authService = new AuthService();
    const response = await authService.signin({ username, password }, profile);
    const token = response && response.token;
    const user = token && await authService.getUserToken(token) as IUser;

    if (token && user) {
      localStorage.setItem('@QuickDates: ACESS_TOKEN', token);
      localStorage.setItem('@QuickDates: USER', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
      return { success: true };
    }
    return { success: false };
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@QuickDates: ACESS_TOKEN');
    localStorage.removeItem('@QuickDates: USER');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useContextAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
