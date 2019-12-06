import React from 'react';
import Image from '../../assets/icon/cash.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContentUser,
  ContentTextUserWelcome,
  ContentTextUser,
  LabelInputUser,
  InputUser,
  AlingImage,
  Imagem,
  BotaoIr,
} from './styles';

export default function Login() {
  return (
    <Container>
      <ContentUser>
        <AlingImage>
          <Imagem source={Image} />
        </AlingImage>

        <ContentTextUserWelcome>Bem vindo</ContentTextUserWelcome>
        <ContentTextUser>Como gostaria de ser chamado?</ContentTextUser>

        <LabelInputUser>
          <InputUser
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Escreva aqui..."
            returnKeyType="send"
          />
          <BotaoIr>
            <Icon name="send" size={30} color="#aaa" />
          </BotaoIr>
        </LabelInputUser>
      </ContentUser>
    </Container>
  );
}
