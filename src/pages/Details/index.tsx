import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductPrice,
  Button,
  ButtonText,
  ProductContainer,
  ProductAmount,
 } from './styles';
import { useRoute } from '@react-navigation/native';

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

interface RouteParams {
  productId: string;
}

const Details: React.FC<CartState> = ({ addToCartRequest, amount }: any) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${routeParams.productId}`);

      setProduct(response.data);
    };

    loadProduct();
  }, [routeParams]);

  const handleAddProduct = useCallback((id: number) => {
    addToCartRequest(id);
  }, []);
  
  return (
    <>
      <Container>
        <ProductContainer key={product.id} onPress={() => {}}>
            <ProductImage source={{ uri: product.image }} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
            <Button onPress={() => handleAddProduct(product.id)}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ButtonText>{amount[product.id] || 0}</ButtonText>
              </ProductAmount>
              <ButtonText>ADD TO CART</ButtonText>
            </Button>
          </ProductContainer>
      </Container>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  amount: state.cart.reduce((amount: any, product: IProduct) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);