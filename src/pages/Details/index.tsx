import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

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
import { useRoute } from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  subtotal: number;
  priceFormatted: string;
}

interface CartState {
  cart: Product[]
}

interface RouteParams {
  productId: string;
}

const Cart: React.FC<CartState> = ({ cart, total, removeFromCart, updateAmountRequest }: any) => {
  const [product, setProduct] = useState<Product>(undefined);
  
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    const { productId } = routeParams;

    api.get(`/products/${productId}`).then(response => {
      setProduct(response.data);
      console.log(product)
    })
  }, []);
  
  const increment = useCallback((product: Product) => {
    updateAmountRequest(product.id, product.amount + 1);
  }, []);
  
  const decrement = useCallback((product: Product) => {
    updateAmountRequest(product.id, product.amount - 1);
  }, []);

  
  return (
    <>
      <Background>
        <Container>
          { cart.map((product: Product) => (
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
          <TotalArea>
            <TotalText>TOTAL</TotalText>
            <Total>{total}</Total>
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
  cart: state.cart.map((product: Product) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total: number, product: Product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);