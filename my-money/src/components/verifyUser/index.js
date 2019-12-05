import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import createNavigator from '../../routes';

class VerifyUser extends Component {
  static propTypes = {
    userLogged: PropTypes.shape(),
  };

  shouldComponentUpdate(newProps) {
    const { userLogged } = this.props;

    return newProps.userLogged !== userLogged;
  }

  render() {
    let { userLogged } = this.props;

    const Routes = createNavigator(!!userLogged);

    return <Routes />;
  }
}

const mapStateToProps = state => ({
  userLogged: state.login.data,
});

export default connect(mapStateToProps)(VerifyUser);
