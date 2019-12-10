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

export default class InputText extends React.Component {
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }
  render() {
    return (
      <TextInput
        onBlur={this.props.onBlur}
        value={this.props.value}
        maxLength={this.props.maxLength}
        onChangeText={this.props.onChangeText}
        style={[this.props.isError ? styles.InputTextErr : styles.InputText]}
        placeholder={this.props.placeholder}
        keyboardType={this.props.keyboardType}
        returnKeyType={this.props.returnKeyType}
        ref={input => (this.textInput = input)}
        onSubmitEditing={this.onSubmitEditing.bind(this)}
        secureTextEntry={this.props.secureTextEntry}
        autoCapitalize={this.props.autoCapitalize}
      />
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  InputText: {
    borderBottomWidth: 1,
    fontWeight: 'bold',
    marginVertical: 2,
    height: 45,
    letterSpacing: 0.6,
    fontSize: 15,
    borderBottomColor: '#707070',
    color: '#707070',
    borderRadius: 10,
    opacity: 0.8,
    padding: 8,
  },
  InputTextErr: {
    borderBottomWidth: 1,
    fontWeight: 'bold',
    marginVertical: 2,
    height: 45,
    letterSpacing: 0.6,
    fontSize: 15,
    borderBottomColor: 'red',
    color: '#707070',
    borderRadius: 10,
    opacity: 0.8,
    padding: 8,
  },
});
