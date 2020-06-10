import React from 'react';
import { TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductImage,
  Background,
  Product,
  ProductTitle,
  ProductInfo,
  ProductPrice,
  ActionButton,
  Divider,
  ActionArea,
  Subtotal,
  Quantity,
  Button,
  ButtonText,
  TotalArea,
  TotalText,
  Total,
 } from './styles';

import Header from '../../components/Header';


const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <Product>
            <ProductImage source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg" }} />
            <ProductInfo>
              <ProductTitle>Tenis massa</ProductTitle>
              <ProductPrice>R$ 123,90</ProductPrice>
            </ProductInfo>
            <ActionButton>
              <Icon name="delete" size={20} color="#ec135a" />
            </ActionButton>
          </Product>
          <Divider>
            <ActionArea>
              <ActionButton>
                <Icon name="remove-circle-outline" size={20} color="#ec135a" />
              </ActionButton>

              <Quantity />

              <ActionButton>
              <Icon name="add-circle-outline" size={20} color="#ec135a" />
            </ActionButton>
            </ActionArea>

            <Subtotal>
              R$1231,12
            </Subtotal>
          </Divider>

          <Product>
            <ProductImage source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" }} />
            <ProductInfo>
              <ProductTitle>Outro Tenis massa</ProductTitle>
              <ProductPrice>R$ 123,90</ProductPrice>
            </ProductInfo>
            <ActionButton>
              <Icon name="delete" size={20} color="#ec135a" />
            </ActionButton>
          </Product>
          <Divider>
            <ActionArea>
              <ActionButton>
                <Icon name="remove-circle-outline" size={20} color="#ec135a" />
              </ActionButton>

              <Quantity />

              <ActionButton>
              <Icon name="add-circle-outline" size={20} color="#ec135a" />
            </ActionButton>
            </ActionArea>

            <Subtotal>
              R$1231,12
            </Subtotal>
          </Divider>
          

          <TotalArea>
            <TotalText>TOTAL</TotalText>
            <Total>R$350,90</Total>
          </TotalArea>
          <Button>
            <ButtonText>
              FINALIZAR PEDIDO
            </ButtonText>
          </Button>
        </Container>
      </Background>
    </>
  );
}

export default Cart;