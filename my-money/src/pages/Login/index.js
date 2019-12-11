import React, { Component } from 'react';
import Image from '../../assets/icon/cash.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as Actions from '../../store/modules/login/actions';

import AsyncStorage from '@react-native-community/async-storage';

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

class Login extends Component {
  state = {
    logar: '',
  };

  handleAddUser = () => {
    const { logar } = this.state;
    const { dispatch } = this.props;

    this.setState({
      logar: logar,
    });

    dispatch(Actions.login(logar));

    AsyncStorage.setItem('logar', JSON.stringify(logar));
  };

  async componentDidMount() {
    const login = await AsyncStorage.getItem('logar');
    console.log(login);

    if (login) {
      this.setState({
        logar: JSON.parse(login),
      });
      this.props.logar = login;
    }
  }

  render() {
    const { logar } = this.state;
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
              value={logar}
              onChangeText={text => this.setState({ logar: text })}
            />
            <BotaoIr onPress={() => this.handleAddUser(this.state.logar)}>
              <Icon name="send" size={30} color="#aaa" />
            </BotaoIr>
          </LabelInputUser>
        </ContentUser>
      </Container>
    );
  }
}

export default connect()(Login);
