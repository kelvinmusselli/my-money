import React, { Component } from 'react';
import api from '../../service/api';
import {} from 'react-native';

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
  StatusValues,
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
    return (
      <Container>
        <InfoUserView>
          <InfoUser>Olá, {this.state.name} =)</InfoUser>
          <LabelSaldo>Saldo: R$ 20,00</LabelSaldo>
        </InfoUserView>

        <List
          data={this.state.data}
          keyExtractor={data => String(data.id)}
          renderItem={({ item }) => (
            <ViewContentList>
              <ListValues>
                <DescriptionValue>{item.description}</DescriptionValue>
                <ListTextValues>{item.value}</ListTextValues>
                <StatusValues>{item.status}</StatusValues>
              </ListValues>
            </ViewContentList>
          )}
        />
      </Container>
    );
  }
}
export default Home;
