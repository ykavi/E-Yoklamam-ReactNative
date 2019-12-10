import React from 'react';
import {LogoScreen} from './components';
import {SelectionScreen} from './components';
import {StudentLogin} from './components';
import {RegisterStudent} from './components';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';

export default class Navigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: LogoScreen,
      navigationOptions: {
        header: null,
      },
    },
    Selection: {
      screen: SelectionScreen,
      navigationOptions: {
        header: null,
      },
    },
    StudentLogin: {
      screen: StudentLogin,
    },
    RegisterStudent: {
      screen: RegisterStudent,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#ffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
