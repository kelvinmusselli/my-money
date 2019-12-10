import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ViewContentList = styled.View``;
export const ListValues = styled.View`
  padding-left: 0px;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const DescriptionValue = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const ListTextValues = styled.Text`
  font-size: 16px;
`;
