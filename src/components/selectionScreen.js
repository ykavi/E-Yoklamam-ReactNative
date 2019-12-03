import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

export default class SelectionScreen extends React.Component {
    studentPress = () => {
        this.props.navigation.navigate('StudentLogin')
    }


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

                <View style={styles.buttons}>

                    <View style={styles.butonView}>
                        <TouchableOpacity style={styles.touchableOpacity}>
                            <Text style={styles.textButton}>Eğitmen Girişi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.2 }}></View>
                    <View style={styles.butonView}>
                        <TouchableOpacity style={styles.touchableOpacity} onPress={this.studentPress}>
                            <Text style={styles.textButton}>Öğrenci Girişi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8 }}></View>
                </View>


            </LinearGradient>

        );
    }
}
const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        alignItems: 'center'
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
        alignItems: 'center'
    },
    logoText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 0.8,
    },
    image: {
        width: 90,
        height: 90
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#707070',
        letterSpacing: 2.3,
        opacity: 0.8
    },
    textButton: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffff',
        letterSpacing: 2.3,
    }
});