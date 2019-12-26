import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export default class StudentHome extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#65BBC9', '#E4ECED']}
        style={styles.linearGradient}>
        <View style={styles.logoText}>
          <Image source={require('../images/logo.png')} style={styles.image} />
          <Text style={styles.text}>E-Yoklamam</Text>
        </View>

        <View style={styles.buttons}>
          <Text>QR EKRANI *****</Text>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
});
