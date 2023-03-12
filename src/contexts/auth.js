import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(name, email, password) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      });
      setLoadingAuth(false);

      navigation.goBack();
    } catch (err) {
      console.log('ERRO AO CADASTRAR', err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
