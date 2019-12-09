import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const InfoUserView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
`;

export const InfosSaldos = styled.View``;

export const ValueSaldo = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const InfoUser = styled.Text`
  font-size: 20px;
`;

export const LabelSaldo = styled.Text`
  color: #000;
  font-size: 16px;
`;

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

export const ButtonCreate = styled(RectButton)``;

export const DivChart = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Legends = styled.View``;

export const LegendRed = styled.View`
  height: 30px;
  width: 30px;
  background: #aaa;
`;

export const LegendGreen = styled.View`
  height: 30px;
  width: 30px;
  background: #aaa;
`;
