import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Text, StyleSheet, Image, StatusBar} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

export default class LogoScreen extends React.Component {
  splashPass() {
    setTimeout(() => {
      this.props.navigation.navigate('Selection');
    }, 1500);
  }
  componentDidMount() {
    this.splashPass();
  }

  render() {
    return (
      <LinearGradient
        colors={['#65BBC9', '#E4ECED']}
        style={styles.linearGradient}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Image source={require('../images/logo.png')} style={styles.image} />
        <Text style={styles.text}>E-Yoklamam</Text>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#707070',
    letterSpacing: 2.3,
    opacity: 0.8,
  },
});
