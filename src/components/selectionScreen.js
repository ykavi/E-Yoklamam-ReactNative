import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  BackHandler,
  TouchableOpacity,
  StatusBar,
  View,
  Alert,
} from 'react-native';

export default class SelectionScreen extends React.Component {
  studentPress = () => {
    this.props.navigation.navigate('StudentLogin');
  };
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);
    this.state = {};
    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload =>
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress),
    );
  }

  handleBackPress = () => {
    Alert.alert(
      'Çıkış',
      'Uygulamayı Kapatmak İstiyor Musunuz?',
      [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackPress,
        ),
    );
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  render() {
    return (
      <LinearGradient
        colors={['#65BBC9', '#E4ECED']}
        style={styles.linearGradient}>
        <StatusBar
          barStyle="white-content"
          backgroundColor="#65BBC9"
          translucent={false} // headere iter
        />
        <View style={styles.logoText}>
          <Image source={require('../images/logo.png')} style={styles.image} />
          <Text style={styles.text}>E-Yoklamam</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.butonView}>
            <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={styles.textButton}>Eğitmen Girişi</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.butonView}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={this.studentPress}>
              <Text style={styles.textButton}>Öğrenci Girişi</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.8}}></View>
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
  touchableOpacity: {
    flex: 1,
    borderRadius: 20,
    borderBottomEndRadius: 30,
    backgroundColor: '#707070',
    opacity: 0.8,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 0.8,
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
  textButton: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
    letterSpacing: 2.3,
  },
});
