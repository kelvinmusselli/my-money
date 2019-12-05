import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StatusBarConfig = ({ modalOpen }) => {
  let barStyle = 'dark-content';
  let color = null;

  if (Platform.OS === 'android' && Platform.Version < 23) {
    barStyle = 'default';
  }

  if (Platform.OS === 'android' && Platform.Version >= 23) {
    color = '#fff';

    if (modalOpen) {
      color = 'rgba(0,0,0,0.5)';
    }
  }

  return <StatusBar barStyle={barStyle} backgroundColor={color} />;
};

StatusBarConfig.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

export default connect(mapStateToProps)(StatusBarConfig);
