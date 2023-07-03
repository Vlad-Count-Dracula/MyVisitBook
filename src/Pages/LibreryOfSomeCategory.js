import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { selectorForLibrary } from '../utils/selectorForLibrary';
import { useContext } from 'react';
import CommonContext from '../Context/Index';
import ItemOfPLace from '../UI/ItemOfPlace';

const LibraryOfSomeCategory = ({ route, navigation }) => {

    const { libraryItems } = useContext(CommonContext);

    const { category } = route.params;
    const categotyText = JSON.stringify(category)
    const sortedArray = selectorForLibrary(libraryItems, categotyText)


    return <ScrollView>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Collections')} style={styles.button} >
                <Text style={styles.buttonText} >GoBack</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container} >
            {sortedArray.map((place) => <ItemOfPLace key={place.id} place={place} />)}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#B9A7A7',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#C2B9B9',
        opacity: 0.8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 300,
    }
})

export default LibraryOfSomeCategory;