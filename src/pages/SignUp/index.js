import React, { useContext } from 'react';
import { View, Text, Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from './styles';

export default function SignUp() {
  const { user } = useContext(AuthContext);

  function handleSignUp() {
    console.log(user.nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
