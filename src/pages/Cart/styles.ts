import styled from 'styled-components/native';

export const Background = styled.ScrollView`
  flex: 1;
  background-color: #ec135a;
  padding: 10px 20px 0px;
`;

export const Container = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ec135a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  padding: 5px 10px 30px 5px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ActionButton = styled.TouchableOpacity``;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ddd;
  padding: 10px;
`;

export const ActionArea = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Quantity = styled.TextInput`
  background-color: #fff;
  border-radius: 3px;
  height: 25px;
  width: 40px;
  margin: 0 10px;
  padding: 0;
  text-align: center;
`;

export const TotalArea = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TotalText = styled.Text`
  color: #999;
  font-size: 20px;
`;

export const Total = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

