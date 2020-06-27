import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import { bindActionCreators, Dispatch, ActionCreator } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

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

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Main: React.FC = ({ addToCart, amount }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Tênis de Caminhada Leve e muito Confortável",
        price: 179.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
      },
      {
        id: 2,
        title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        price: 139.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
      },
      {
        id: 3,
        title: "Tênis Adidas Duramo Lite 2.0",
        price: 219.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
      },
      {
        id: 5,
        title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        price: 139.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
      },
      {
        id: 6,
        title: "Tênis Adidas Duramo Lite 2.0",
        price: 219.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
      },
      {
        id: 4,
        title: "Tênis de Caminhada Leve Confortável",
        price: 179.9,
        image: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
      }
    ]);
  }, []);

  const handleAddProduct = useCallback((product: Product) => {
    addToCart(product);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {products.map(product => (
          <ProductContainer key={product.id}>
            <ProductImage source={{ uri: product.image }} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
            <Button onPress={() => handleAddProduct(product)}>
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