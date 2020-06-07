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
        name="Main"
        component={Main}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Icon name="format-list-bulleted" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Feather name="bookmark" size={20} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteTabs;
