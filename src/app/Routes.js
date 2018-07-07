import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DashboardScreen from './../screens/dashboard/DashboardScreen';

const AppNavigator = createStackNavigator({
  DashboardScreen: { screen: DashboardScreen }
}, {
  navigationOptions: {
    header: null
  }
});

export default() => (
  <AppNavigator />
);
