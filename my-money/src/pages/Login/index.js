import React, { Component } from 'react';
// import { View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import StorageActions from '../../store/ducks/storage';
import { Container, View, Text } from './styles';
import LoginActions from '../../store/ducks/login';

// import Icone from '../../assets/icon/cash.svg';

class Login extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.shape()]),
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    storageError: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.string,
    ]),
    success: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    loginRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    setStorageData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: null,
    error: null,
    storageError: null,
  };

  state = {
    nameUser: '',
    nameInput: null,
  };

  inputs = {};

  render() {
    const { nameUser, nameInput } = this.state;
    const { loading, error, storageError } = this.props;

    return (
      <Container>
        <View>
          <Text>AEEE</Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.login.data,
  loading: state.login.loading,
  success: state.login.success,
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...LoginActions,
      ...StorageActions,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
