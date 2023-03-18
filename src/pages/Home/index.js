import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import { Background } from './styles.js';

export default function Home() {
  return (
    <Background>
      <Header title="Minhas movimentações" />
    </Background>
  );
}
