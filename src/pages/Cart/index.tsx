import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

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

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: string;
}

interface CartState {
  cart: Product[]
}

const Cart: React.FC<CartState> = ({ cart, removeFromCart }: CartState) => {
  return (
    <>
      <Header />
      <Background>
        <Container>
          { cart.map(product => (
          <>
            <Product key={product.id} >
              <ProductImage source={{ uri: product.image }} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
              <ActionButton onPress={() => removeFromCart(product.id)}>
                <Icon name="delete" size={20} color="#ec135a" />
              </ActionButton>
            </Product>
            <Divider key={product.title} >
              <ActionArea>
                <ActionButton>
                  <Icon name="remove-circle-outline" size={20} color="#ec135a" />
                </ActionButton>

                <Quantity value={String(product.amount)} />

                <ActionButton>
                <Icon name="add-circle-outline" size={20} color="#ec135a" />
              </ActionButton>
              </ActionArea>

              <Subtotal>
                R$1231,12
              </Subtotal>
            </Divider>
          </>
          )) }
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

const mapStateToProps = (state: any) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);