import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

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
        "id": 1,
        "title": "Tênis de Caminhada Leve e muito Confortável Confortável",
        "price": 179.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
      },
      {
        "id": 2,
        "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        "price": 139.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
      },
      {
        "id": 3,
        "title": "Tênis Adidas Duramo Lite 2.0",
        "price": 219.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
      },
      {
        "id": 5,
        "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
        "price": 139.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
      },
      {
        "id": 6,
        "title": "Tênis Adidas Duramo Lite 2.0",
        "price": 219.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
      },
      {
        "id": 4,
        "title": "Tênis de Caminhada Leve Confortável",
        "price": 179.9,
        "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
      }
    ]);
  }, []);

  return (
    <View>
      <Text>Main</Text>
    </View>
  );
}

export default Main;