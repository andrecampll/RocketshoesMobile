import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.ScrollView`
  background-color: #ec135a;
  flex-direction: column;
  padding: 0 20px;
`;


export const ProductContainer = styled.View`
  align-items: center;
  background-color: #fff;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 15px;
  font-family: sans-serif;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  background-color: #ec135a;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  flex-direction: row;
  padding-right: 32%;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
`;

export const ProductInfo = styled.View`
  width: 100%;
`;

export const ProductAmount = styled.View`
  background-color: ${darken(0.09, '#ec135a')};
  width: 25%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
