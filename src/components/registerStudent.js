import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {placeholder} from '@babel/types';
import {InputText} from './';
import {TouchableButton} from './';

export default class RegisterStudent extends React.Component {
  static navigationOptions = {
    title: 'Öğrenci Kayıt',
    headerStyle: {
      backgroundColor: '#65BBC9',
    },
    headerTintColor: '#707070', //geri buton rengi
    headerTitleStyle: {
      color: '#707070',
      fontSize: 22,
      letterSpacing: 5,
    },
  };
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <LinearGradient
        colors={['#65BBC9', '#E4ECED']}
        style={(styles.linearGradient, {paddingTop: 20})}>
        <ScrollView
          style={{
            height: '100%',
            paddingHorizontal: 60,
            width: '100%',
          }}>
          <View style={{flex: 1}}>
            <InputText
              style={styles.InputText}
              placeholder="Öğrenci numaranızı giriniz"
              returnKeyType={'next'}
              onRef={ref => {
                this.inputs['studentNo'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('name');
              }}
            />
            <InputText
              returnKeyType={'next'}
              style={styles.InputText}
              placeholder="Adınız"
              onRef={ref => {
                this.inputs['name'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('surname');
              }}
            />
            <InputText
              returnKeyType={'next'}
              style={styles.InputText}
              placeholder="Soyadınız"
              onRef={ref => {
                this.inputs['surname'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('password');
              }}
            />
            <InputText
              returnKeyType={'next'}
              style={styles.InputText}
              placeholder="Şifre"
              secureTextEntry={true}
              onRef={ref => {
                this.inputs['password'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('confirmPassword');
              }}
            />
            <InputText
              returnKeyType={'next'}
              style={styles.InputText}
              placeholder="Şifre(tekrar)"
              secureTextEntry={true}
              onRef={ref => {
                this.inputs['confirmPassword'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('mail');
              }}
            />
            <InputText
              returnKeyType={'next'}
              style={styles.InputText}
              placeholder="E-posta"
              keyboardType="email-address"
              onRef={ref => {
                this.inputs['mail'] = ref;
              }}
              onSubmitEditing={() => {
                this.focusNextField('phoneNo');
              }}
            />
            <InputText
              returnKeyType={'go'}
              style={styles.InputText}
              placeholder="Telefon Numarası"
              keyboardType="phone-pad"
              onRef={ref => {
                this.inputs['phoneNo'] = ref;
              }}
              onSubmitEditing={() => {}}
            />
            <TouchableButton
              onPress={() => this.props.navigation.navigate('Home')}
              text="Kaydol"
            />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
