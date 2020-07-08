import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './pages/Details';

import Tabs from './tabs.routes';

const Stack = createStackNavigator();

const Nav: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Routes"
        component={Tabs}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: { backgroundColor: '#333' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default Nav;
