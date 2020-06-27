import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

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

const Header: React.FC = ({ cart }) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cart.length}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

// export default connect(
//   state => ({
//     cartSize: state.cart.length,
//   }),
//   null
// )(Header);

export default connect((state: CartState) => ({
  cart: state.cart,
}))(Header);
