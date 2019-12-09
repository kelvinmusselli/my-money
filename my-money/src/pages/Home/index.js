import React, { Component } from 'react';
import api from '../../service/api';
import { R } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PieChart } from 'react-native-svg-charts';

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
} from './styles';

class Home extends Component {
  state = {
    name: 'Kelvin',
    data: [],
  };

  async componentDidMount() {
    const response = await api.get(`/in_out`);
    this.setState({ data: response.data });
  }

  render() {
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
          <InfoUser>Olá, {this.state.name}</InfoUser>
          <InfosSaldos>
            <LabelSaldo>Carteira</LabelSaldo>
            <ValueSaldo>R$ 20,00</ValueSaldo>
          </InfosSaldos>
        </InfoUserView>
        <DivChart>
          <PieChart style={{ height: 200 }} data={pieData} />
          <Legends>
            <LegendRed />
            <LegendGreen />
          </Legends>
        </DivChart>

        <List
          data={this.state.data}
          keyExtractor={data => String(data.id)}
          renderItem={({ item }) => (
            <ViewContentList>
              <ListValues>
                <DescriptionValue>{item.description}</DescriptionValue>
                <ListTextValues>{item.value}</ListTextValues>
              </ListValues>
            </ViewContentList>
          )}
        />
      </Container>
    );
  }
}
export default Home;
