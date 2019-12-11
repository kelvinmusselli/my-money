import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PieChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as ActionsMoney from '../../store/modules/money/actions';
import * as ActionsLogin from '../../store/modules/login/actions';

import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  InfoUserView,
  InfoUser,
  LabelSaldo,
  Chart,
  List,
  ListValues,
  ViewContentList,
  ListTextValues,
  DescriptionValue,
  InfosSaldos,
  ValueSaldo,
  DivChart,
  Legends,
  LegendRed,
  LegendGreen,
  ButtonOption,
} from './styles';

function Home({ login, dispatch, money }) {
  // const data = [50, 10];

  // const randomColor = () =>
  //   ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
  //     0,
  //     7
  //   );

  // const pieData = data
  //   .filter(value => value > 0)
  //   .map((value, index) => ({
  //     value,
  //     svg: {
  //       fill: randomColor(),
  //       onPress: () => console.log('press', index),
  //     },
  //     key: `pie-${index}`,
  //   }));

  handleAddMoney = money => {
    dispatch(ActionsMoney.addMoney(money));

    AsyncStorage.setItem('money', JSON.stringify(money));
  };

  return (
    <Container>
      <InfoUserView>
        <InfoUser>Olá, {ActionsLogin.login}</InfoUser>
        <InfosSaldos>
          <LabelSaldo>Carteira</LabelSaldo>
          <ValueSaldo>R$ 20,00</ValueSaldo>
        </InfosSaldos>
      </InfoUserView>

      {/* <PieChart style={{ height: 200 }} data={pieData} /> */}

      <List
        data={money}
        keyExtractor={money => String(money.id)}
        renderItem={({ item }) => (
          <ViewContentList>
            <ListValues>
              <DescriptionValue>{item.description}</DescriptionValue>
              <ListTextValues>{item.value}</ListTextValues>
              <ButtonOption
                onPress={() => dispatch(ActionsMoney.removeMoney(item.id))}
              >
                <Icon name="delete" size={25} color="#fff" />
              </ButtonOption>
            </ListValues>
          </ViewContentList>
        )}
      />
      <ButtonOption
        onPress={() =>
          handleAddMoney({
            id: 1,
            description: 'Hot dog',
            value: 'R$ 10,00',
            status: 'in',
            period: '09/12/2019',
          })
        }
      >
        <Icon name="add" size={25} color="#fff" />
      </ButtonOption>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsLogin, dispatch);
const mapStateToProps = state => ({
  login: state.login,
  money: state.money,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
