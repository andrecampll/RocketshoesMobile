import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Tab = createMaterialBottomTabNavigator();

const RouteTabs: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#fff"
      inactiveColor="#000"
      barStyle={{ backgroundColor: '#ec135a' }}
    >
      <Tab.Screen
        name="Lista"
        component={Main}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Icon name="home" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrrinho"
        component={Cart}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Feather name="shopping-cart" size={20} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteTabs;
