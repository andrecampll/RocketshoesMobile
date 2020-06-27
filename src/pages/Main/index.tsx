import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

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
}

const Main: React.FC = () => {
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

  const dispatch = useDispatch();

  const handleAddProduct = useCallback((product: Product) => {
    dispatch({
      type: 'ADDTOCART',
      product,
    });
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
              </ProductAmount>
              <ButtonText>ADD TO CART</ButtonText>
            </Button>
          </ProductContainer>
        ))}
      </Container>
    </>
  );
}

export default connect()(Main);