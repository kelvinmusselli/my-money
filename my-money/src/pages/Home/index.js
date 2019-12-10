import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { PieChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';

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

function Home({ login }) {
  console.log(login);

  state = {
    money: [
      {
        id: '1',
        description: 'Hot dog',
        value: 'R$ 10,00',
        status: 'in',
        period: '09/12/2019',
      },
    ],
  };

  handleAddMoney = depot => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_MONEY',
      depot,
    });
  };

  const data = [50, 10];

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    );

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  return (
    <Container>
      <InfoUserView>
        <InfoUser>Olá, {login}</InfoUser>
        <InfosSaldos>
          <LabelSaldo>Carteira</LabelSaldo>
          <ValueSaldo>R$ 20,00</ValueSaldo>
        </InfosSaldos>
      </InfoUserView>

      <PieChart style={{ height: 200 }} data={pieData} />

      <List
        data={this.state.money}
        keyExtractor={money => String(money.id)}
        renderItem={({ item }) => (
          <ViewContentList>
            <ListValues>
              <DescriptionValue>{item.description}</DescriptionValue>
              <ListTextValues>{item.value}</ListTextValues>
            </ListValues>
          </ViewContentList>
        )}
      />
      <ButtonOption onPress={() => this.handleAddMoney(this.state.money)}>
        <Icon name="add" size={25} color="#fff" />
      </ButtonOption>
    </Container>
  );
}

const mapStateToProps = state => ({
  login: state.login,
});
export default connect(mapStateToProps)(Home);
