import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import {placeholder} from '@babel/types';

export default class StudentLogin extends React.Component {
  static navigationOptions = {
    title: 'Öğrenci Girişi',
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

  render() {
    return (
      <LinearGradient
        colors={['#65BBC9', '#E4ECED']}
        style={styles.linearGradient}>
        <View style={styles.logoText}>
          <Image source={require('../images/logo.png')} style={styles.image} />
          <Text style={styles.text}>E-Yoklamam</Text>
        </View>
        <ScrollView>
          <View style={styles.buttons}>
            <View style={styles.butonView}>
              <Text style={styles.inputHeader}>Öğrenci Numarası</Text>
              <View style={{flex: 0.4}}></View>
              <TextInput
                onSubmitEditing={() => this.refs.passInput.focus()}
                returnKeyType="next"
                autoCapitalize="none"
                fontWeight="italic"
                placeholder="Öğrenci numaranızı giriniz.."
                style={styles.studentNumberInput}></TextInput>
            </View>

            <View style={(styles.butonView, {marginBottom: 20})}>
              <Text style={styles.inputHeader}>Şifre</Text>
              <TextInput
                returnKeyType="go"
                ref={'passInput'}
                autoCapitalize="none"
                placeholder="Şifrenizi giriniz.."
                secureTextEntry={true}
                style={styles.studentNumberInput}
              />
            </View>

            <View
              style={{
                flex: 0.6,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <Text style={styles.forgotPassw}>Şifreni mi unuttun?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn}>
                <Text
                  style={{
                    color: '#FFFF',
                    letterSpacing: 1,
                    fontWeight: 'bold',
                  }}>
                  Giriş
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={{flex: 0.3, alignItems: 'center', paddingBottom: 10}}>
          <Text style={{letterSpacing: 1, color: '#707070'}}>
            Hesabın yok mu?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterStudent')}>
            <Text
              style={{letterSpacing: 1, color: '#707070', fontWeight: 'bold'}}>
              Hesap aç
            </Text>
          </TouchableOpacity>
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
  butonView: {
    flex: 1,
  },
  forgotPassw: {
    color: '#707070',
  },
  loginBtn: {
    borderRadius: 20,
    borderBottomEndRadius: 30,
    backgroundColor: '#707070',
    opacity: 0.8,
    height: 25,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  studentNumberInput: {
    borderBottomWidth: 1,
    fontWeight: 'bold',
    height: 45,
    letterSpacing: 0.6,
    fontSize: 17,
    borderBottomColor: '#707070',
    color: '#707070',
    borderRadius: 10,
    opacity: 0.8,
    padding: 8,
  },
  inputHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
    marginLeft: 10,
    opacity: 0.0,
    paddingHorizontal: 50,
  },
  touchableOpacity: {
    flex: 1,
    borderRadius: 20,
    borderBottomEndRadius: 30,
    backgroundColor: '#707070',
    opacity: 0.6,
    paddingHorizontal: 40,
    justifyContent: 'center',
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 18.0,
    elevation: 4,
    alignItems: 'center',
  },
  logoText: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#707070',
    letterSpacing: 2.3,
    opacity: 0.8,
  },
  textButton: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
    letterSpacing: 2.3,
  },
});
