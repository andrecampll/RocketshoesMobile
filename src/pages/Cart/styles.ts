import styled from 'styled-components/native';

export const Background = styled.ScrollView`
  flex: 1;
  background-color: #ec135a;
  padding: 10px 20px;
`;

export const Container = styled.View`
  padding: 30px 10px;
  background-color: #fff;
  border-radius: 5px;
`;


export const ProductTable = styled.View`
  width: 100%;
`;

export const Thead = styled.View`
  display: flex;
`;

export const Tr = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Th = styled.Text`
  color: #999;
  margin-left: 20px;
`;

export const Tbody = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Td = styled.View`
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
`;

export const ProductPrice = styled.Text``;

export const Footer = styled.View`
  margin-top: 30px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ec135a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Total = styled.View`
  
`;

export const Span = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const Strong = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const ActionButton = styled.TouchableOpacity``;

export const ActionArea =styled.View`
  margin: 10px;
  flex-direction: column;
`;