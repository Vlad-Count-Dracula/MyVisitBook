import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


// Логотип приложения 

const Logo = () => {

    const [fontsLoaded] = useFonts({
        'Fasthand-Regular': require('../../assets/fonts/Fasthand-Regular.ttf'),
        'PlayfairDisplay-Bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} >
            <Text style={styles.customFont} >MyVisit</Text>
            <Text style={styles.customFont2} >Book</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 45,
    },
    customFont: {
        fontFamily: 'Fasthand-Regular',
        color: '#fff',
        fontSize: 25,
        
    },
    customFont2: {
        fontFamily: 'PlayfairDisplay-Bold',
        color: '#fff',
        fontSize: 20,
    }
});

export default Logo;