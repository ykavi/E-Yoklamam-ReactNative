import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {placeholder} from '@babel/types';

export default class ErrorMessageText extends React.Component {
  render() {
    return <Text style={styles.errorText}>{this.props.errText}</Text>;
  }
}
const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    paddingLeft: 10,
  },
});
