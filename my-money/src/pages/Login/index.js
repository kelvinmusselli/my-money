import React, { Component } from 'react';
import Image from '../../assets/icon/cash.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
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

    dispatch({
      type: 'ADD_USER',
      logar,
    });

    this.setState({
      logar: logar,
    });

    AsyncStorage.setItem('logar', JSON.stringify(logar));
  };

  async componentDidMount() {
    const logar = await AsyncStorage.getItem('logar');

    if (logar) {
      this.setState({
        logar: JSON.parse(logar),
      });
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
