import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TipoText, Tipo, IconView, ValorText } from './styles';

export default function HistoricoList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.type}>
          <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} size={20} color="#FFF" />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>{data.value}</ValorText>
    </Container>
  );
}
