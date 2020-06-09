import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Footer,
  Button,
  ButtonText,
  Total,
  Span,
  Strong,
  ActionButton,
  Background,
  ActionArea,
 } from './styles';

import Header from '../../components/Header';


const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <ProductTable>
            <Thead>
              <Tr>
                <Th />
                <Th>PRODUTO</Th>
                <Th>QTD</Th>
                <Th>SUBTOTAL</Th>
                <Th />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <ProductImage source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg" }} />
                </Td>
                <Td>
                  <ProductTitle>Tenis massa</ProductTitle>
                  <ProductPrice>R$1231,90</ProductPrice>
                </Td>
                <ActionArea>
                  <ActionButton>
                    <Icon size={20} name="add-circle-outline" />
                  </ActionButton>
                  <ActionButton>
                    <Icon size={20} name="remove-circle-outline" />
                  </ActionButton>
                </ActionArea>
                <Td>
                  <Strong>R$3123,91</Strong>
                </Td>
                <ActionButton>
                  <Icon size={20} name="delete" />
                </ActionButton>
              </Tr>
            </Tbody>
          </ProductTable>

          <Footer>
            <Button>
              <ButtonText>Finalizar</ButtonText>
            </Button>

            <Total>
              <Span>TOTAL</Span>
              <Strong>R$1231,90</Strong>
            </Total>
          </Footer>
        </Container>
      </Background>
    </>
  );
}

export default Cart;