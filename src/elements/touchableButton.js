import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import {placeholder} from '@babel/types';

export default class TouchableButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableButon}
        onPress={() => this.props.onPress()}>
        <Text style={{color: '#FFFF', letterSpacing: 1, fontWeight: 'bold'}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  touchableButon: {
    borderRadius: 20,
    borderBottomEndRadius: 30,
    backgroundColor: '#707070',
    opacity: 0.9,
    marginVertical: 10,
    height: 25,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
