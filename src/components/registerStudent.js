import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {InputText} from './';
import {TouchableButton} from './';
import {ErrorMessageText} from './';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import registerApi from '../service/registerAPI';

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
      letterSpacing: 4,
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

  _handleSubmit = async (values, bag) => {
    try {
      await registerApi(values);
      //alert('Kayıt tamam');
    } catch (error) {
      bag.setErrors(error);
      alert(error);
    }
  };

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
          <Formik
            initialValues={{
              studentNumber: '',
              name: '',
              surName: '',
              password: '',
              confirmPassword: '',
              mail: '',
              phoneNumber: '',
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              studentNumber: Yup.string()
                .trim()
                .min(6, '* Minumum 6 karakter.')
                .required('* Bu alan boş geçilemez.'),
              name: Yup.string()
                .trim()
                .required('* Bu alan boş geçilemez.'),
              surName: Yup.string()
                .trim()
                .required('* Bu alan boş geçilemez.'),
              password: Yup.string()
                .min(5, '* Minumum 5 karakter.')
                .required('* Bu alan boş geçilemez.'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], '* Şifreler uyuşmuyor.')
                .required('* Bu alan boş geçilemez.'),
              mail: Yup.string()
                .email('* Geçersiz mail.')
                .trim()
                .required('* Bu alan boş geçilemez.'),
              phoneNumber: Yup.string()
                .min(10, '* Geçerli telefon numarası giriniz.')
                .trim()
                .required('* Bu alan boş geçilemez.'),
            })}>
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
              setFieldTouched,
            }) => (
              <View style={{flex: 1}}>
                <InputText
                  maxLength={14}
                  onBlur={() => setFieldTouched('studentNumber')}
                  isError={errors.studentNumber && touched.studentNumber}
                  value={values.studentNumber}
                  onChangeText={handleChange('studentNumber')}
                  placeholder="Öğrenci numaranızı giriniz"
                  autoCapitalize="none"
                  returnKeyType={'next'}
                  onRef={ref => {
                    this.inputs['studentNo'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('name');
                  }}
                />
                <ErrorMessageText
                  errText={touched.studentNumber ? errors.studentNumber : ''}
                />
                <InputText
                  onBlur={() => setFieldTouched('name')}
                  maxLength={14}
                  isError={errors.name && touched.name}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  returnKeyType={'next'}
                  style={styles.InputText}
                  placeholder="Adınız"
                  autoCapitalize="none"
                  onRef={ref => {
                    this.inputs['name'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('surname');
                  }}
                />
                <ErrorMessageText errText={touched.name ? errors.name : ''} />
                <InputText
                  onBlur={() => setFieldTouched('surName')}
                  maxLength={14}
                  isError={errors.surName && touched.surName}
                  value={values.surName}
                  onChangeText={handleChange('surName')}
                  returnKeyType={'next'}
                  style={styles.InputText}
                  placeholder="Soyadınız"
                  autoCapitalize="none"
                  onRef={ref => {
                    this.inputs['surname'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('password');
                  }}
                />
                <ErrorMessageText
                  errText={touched.surName ? errors.surName : ''}
                />
                <InputText
                  onBlur={() => setFieldTouched('password')}
                  maxLength={14}
                  isError={errors.password && touched.password}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  returnKeyType={'next'}
                  placeholder="Şifre"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  onRef={ref => {
                    this.inputs['password'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('confirmPassword');
                  }}
                />
                <ErrorMessageText
                  errText={touched.password ? errors.password : ''}
                />
                <InputText
                  onBlur={() => setFieldTouched('confirmPassword')}
                  maxLength={14}
                  isError={errors.confirmPassword && touched.confirmPassword}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  returnKeyType={'next'}
                  style={styles.InputText}
                  placeholder="Şifre(tekrar)"
                  autoCapitalize="none"
                  secureTextEntry={true}
                  onRef={ref => {
                    this.inputs['confirmPassword'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('mail');
                  }}
                />
                <ErrorMessageText
                  errText={
                    touched.confirmPassword ? errors.confirmPassword : ''
                  }
                />
                <InputText
                  onBlur={() => setFieldTouched('mail')}
                  maxLength={50}
                  isError={errors.mail && touched.mail}
                  value={values.mail}
                  onChangeText={handleChange('mail')}
                  returnKeyType={'next'}
                  style={styles.InputText}
                  placeholder="E-posta"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onRef={ref => {
                    this.inputs['mail'] = ref;
                  }}
                  onSubmitEditing={() => {
                    this.focusNextField('phoneNo');
                  }}
                />
                <ErrorMessageText errText={touched.mail ? errors.mail : ''} />
                <InputText
                  onBlur={() => setFieldTouched('phoneNumber')}
                  maxLength={11}
                  isError={errors.phoneNumber && touched.phoneNumber}
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  returnKeyType={'go'}
                  style={styles.InputText}
                  placeholder="Telefon Numarası"
                  keyboardType="phone-pad"
                  onRef={ref => {
                    this.inputs['phoneNo'] = ref;
                  }}
                  onSubmitEditing={() => {}}
                />
                <ErrorMessageText
                  errText={touched.phoneNumber ? errors.phoneNumber : ''}
                />
                <TouchableButton
                  //onPress={() => this.props.navigation.navigate('Home')}
                  onPress={handleSubmit}
                  text="Kaydol"
                />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isSubmitting}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View style={styles.modal}>
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                </Modal>
              </View>
            )}
          </Formik>
        </ScrollView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  modal: {
    backgroundColor: 'white',
    opacity: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
