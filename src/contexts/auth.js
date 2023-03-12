import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: 'Thiago teste',
  });

  const navigation = useNavigation();

  async function signUp(name, email, password) {
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      });

      navigation.goBack();
    } catch (err) {
      console.log('ERRO AO CADASTRAR', err);
    }
  }

  return <AuthContext.Provider value={{ user, signUp }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
