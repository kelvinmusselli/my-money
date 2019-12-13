import React, { Component } from 'react';
import Image from '../../assets/icon/cash.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionsMoney from '../../store/modules/money/actions';

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

  handleAddUser = logar => {
    const { login } = this.props;

    this.setState({
      logar: logar,
    });
    login.push(logar);

    AsyncStorage.setItem('logar', JSON.stringify(logar));
  };

  async componentDidMount() {
    const logando = await AsyncStorage.getItem('logar');
    if (logando) {
      this.setState({
        logar: JSON.parse(logando),
      });
    }
  }

  render() {
    const { logar } = this.state;
    const { login } = this.props;
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

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsMoney, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
