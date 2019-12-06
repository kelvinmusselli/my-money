import React from 'react';

import { Container, InfoUserView, InfoUser, LabelSaldo } from './styles';

export default function Home() {
  return (
    <Container>
      <InfoUserView>
        <InfoUser>Olá, Kelvin =)</InfoUser>
      </InfoUserView>
      <LabelSaldo>Saldo: R$ 20,00</LabelSaldo>
    </Container>
  );
}
