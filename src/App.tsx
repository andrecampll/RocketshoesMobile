import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <View style={{ backgroundColor: '#222', flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor="#333" />
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
