import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  View,
  Modal,
  TextInput,
} from 'react-native';
import {ErrorMessageText} from './';
import loginApi from '../service/loginAPI';

export default class StudentLogin extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this); //Bu fonksiyona propsları baglıyoruz icerde kullanabilmek icin
  }
  static navigationOptions = {
    title: 'Öğrenci Girişi',
    headerStyle: {
      backgroundColor: '#65BBC9',
    },
    headerTintColor: '#707070', //geri buton rengi
    headerTitleStyle: {
      color: '#707070',
      fontSize: 22,
      letterSpacing: 4,
    },
  };
  state = {
    username: '',
    password: '',
    errMessage: '',
    errMessagePASS: '',
    nameFlak: 0,
    passFlak: 0,
    modalVisible: false,
  };
  submit = async () => {
    if (
      this.state.username.trim() == '' ||
      this.state.username.length.toString() <= 6
    ) {
      this.setState({errMessage: '* Minumum 6 karakter'});
      this.setState({nameFlak: 1});
    } else {
      this.setState({errMessage: ''});
      this.setState({nameFlak: 0});
      if (
        this.state.password.trim() != '' &&
        this.state.password.length.toString() >= 5
      ) {
        var toJSON =
          "{'username': '" +
          this.state.username +
          "', 'password': '" +
          this.state.password +
          "'}";
        var body = eval('(' + toJSON + ')');
        this.setState({errMessagePASS: ''});
        this.setState({passFlak: 0});
        try {
          this.setState({modalVisible: true});
          await loginApi(body);
          this.setState({modalVisible: false});
          this.props.navigation.navigate('StudentHome');
        } catch (error) {
          //bag.setErrors(error);
          this.setState({modalVisible: false});
          Alert.alert(
            'Hata ',
            error,
            [{text: 'Tamam', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      }
    }

    if (
      this.state.password.trim() == '' ||
      this.state.password.length.toString() < 5
    ) {
      this.setState({errMessagePASS: '* Minumum 5 karakter'});
      this.setState({passFlak: 1});
    } else {
      this.setState({errMessagePASS: ''});
      this.setState({passFlak: 0});
      if (
        this.state.username.trim() != '' &&
        this.state.username.length.toString() > 6
      ) {
        var toJSON =
          "{'username': '" +
          this.state.username +
          "', 'password': '" +
          this.state.password +
          "'}";
        var body = eval('(' + toJSON + ')');
        this.setState({errMessage: ''});
        this.setState({nameFlak: 0});
      }
    }
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
                maxLength={14}
                onChangeText={value => this.setState({username: value})}
                onSubmitEditing={() => this.refs.passInput.focus()}
                returnKeyType="next"
                autoCapitalize="none"
                fontWeight="italic"
                placeholder="Öğrenci numaranızı giriniz.."
                style={
                  this.state.nameFlak
                    ? styles.studentNumberInputErr
                    : styles.studentNumberInput
                }></TextInput>
              <ErrorMessageText errText={this.state.errMessage} />
            </View>

            <View style={(styles.butonView, {marginBottom: 20})}>
              <Text style={styles.inputHeader}>Şifre</Text>
              <TextInput
                maxLength={14}
                onChangeText={value => this.setState({password: value})}
                returnKeyType="go"
                ref={'passInput'}
                autoCapitalize="none"
                placeholder="Şifrenizi giriniz.."
                secureTextEntry={true}
                style={
                  this.state.passFlak
                    ? styles.studentNumberInputErr
                    : styles.studentNumberInput
                }
              />
              <ErrorMessageText errText={this.state.errMessagePASS} />
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

              <TouchableOpacity style={styles.loginBtn} onPress={this.submit}>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible} //isSubmitting
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#000ff" />
          </View>
        </Modal>
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  studentNumberInputErr: {
    borderBottomWidth: 1,
    fontWeight: 'bold',
    height: 45,
    letterSpacing: 0.6,
    fontSize: 17,
    borderBottomColor: 'red',
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
