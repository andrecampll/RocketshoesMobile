import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import { bindActionCreators, Dispatch, ActionCreator } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  Button,
  ButtonText,
  ProductInfo,
  ProductAmount,
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Main: React.FC = ({ addToCartRequest, amount }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { navigate } = useNavigation();


  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleAddProduct = useCallback((id: number) => {
    addToCartRequest(id);
  }, []);

  const handleNavigate = useCallback((productId: number) => {
    navigate('Details', {
      productId,
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {products.map(product => (
          <ProductContainer key={product.id} onPress={() => {handleNavigate(product.id)}} >
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
        ))}
      </Container>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  amount: state.cart.reduce((amount: any, product: Product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);