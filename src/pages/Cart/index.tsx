import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

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

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  subtotal: number;
  priceFormatted: string;
}

interface CartState {
  cart: IProduct[]
}

const Cart: React.FC<CartState> = ({ cart, total, removeFromCart, updateAmountRequest }: any) => {
  const increment = useCallback((product: IProduct) => {
    updateAmountRequest(product.id, product.amount + 1);
  }, []);
  
  const decrement = useCallback((product: IProduct) => {
    updateAmountRequest(product.id, product.amount - 1);
  }, []);
  
  return (
    <>
      <Header />
      <Background>
        <Container>
          { cart.map((product: IProduct) => (
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
                <ActionButton onPress={() => decrement(product)} >
                  <Icon name="remove-circle-outline" size={20} color="#ec135a" />
                </ActionButton>

                <Quantity value={String(product.amount)} />

                <ActionButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#ec135a" />
              </ActionButton>
              </ActionArea>

              <Subtotal>
                {product.subtotal}
              </Subtotal>
            </Divider>
          </>
          )) }
          { total === 0 ? (
            <TotalArea>
              <Total>Oops...</Total>
              <Feather name="frown" color="#ec135a" size={70} />
              <TotalText>Sem produtos no seu carrinho</TotalText>
            </TotalArea>
          ) : (
            <>
              <TotalArea>
                <TotalText>TOTAL</TotalText>
                <Total>{total}</Total>
              </TotalArea>
              <Button>
                <ButtonText>
                  FINALIZAR PEDIDO
                </ButtonText>
              </Button>
            </>
          )}
        </Container>
      </Background>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  cart: state.cart.map((product: IProduct) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total: number, product: IProduct) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);