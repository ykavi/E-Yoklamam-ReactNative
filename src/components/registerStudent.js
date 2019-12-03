import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    View,
    TextInput
} from 'react-native';
import { placeholder } from '@babel/types';

export default class RegisterStudent extends React.Component {
    static navigationOptions = {
        title: 'Öğrenci Kayıt',
        headerStyle: {
            backgroundColor: '#65BBC9'
        },
        headerTintColor: '#707070',//geri buton rengi
        headerTitleStyle: {
            color: '#707070',
            fontSize: 22,
            letterSpacing: 5,
        },
    };

    render() {
        return (

            <LinearGradient colors={['#65BBC9', '#E4ECED']} style={styles.linearGradient}>

                <View style={styles.logoText}>
                    <Image
                        source={require('../images/logo.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>
                        E-Yoklamam
                    </Text>
                </View>
                <ScrollView>
                    <Text>Öğrenci kayıt</Text>
                </ScrollView>


            </LinearGradient >


        );
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center'
    },
    logoText: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#707070',
        letterSpacing: 2.3,
        opacity: 0.8
    },
});