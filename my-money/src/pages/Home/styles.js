import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const InfoUserView = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InfoUser = styled.Text`
  font-size: 20px;
`;

export const LabelSaldo = styled.Text``;

export const Chart = styled.View``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ViewContentList = styled.View``;
export const ListValues = styled.View`
  padding-left: 0px;
  margin-top: 10px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #eee;
`;

export const DescriptionValue = styled.Text`
  font-size: 22px;
  color: #000;
`;

export const ListTextValues = styled.Text`
  font-size: 18px;
`;

export const StatusValues = styled.Text`
  font-size: 16px;
  color: blue;
`;
