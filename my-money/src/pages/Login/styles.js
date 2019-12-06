import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #81d4fa;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ContentUser = styled.View``;

export const ContentTextUserWelcome = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-family: sans-serif;
`;

export const ContentTextUser = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export const LabelInputUser = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  justify-content: space-between;
  margin-left: 20px;
  width: 250px;
  align-items: center;
  border: none;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  margin-top: 35px;
`;

export const InputUser = styled.TextInput`
  margin-left: 6px;
  width: 200px;
`;

export const BotaoIr = styled(RectButton)`
  margin-right: 10px;
`;

export const AlingImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.Image`
  width: 100px;
  height: 100px;
`;
