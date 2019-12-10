import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  List,
  ViewContentList,
  ListValues,
  ListTextValues,
  DescriptionValue,
} from './styles';

function ListDepot({ money }) {
  console.log(money);

  return (
    <Container>
      <List
        data={money}
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
    </Container>
  );
}

const mapStateToProps = state => ({
  money: state.money,
});
export default connect(mapStateToProps)(ListDepot);
