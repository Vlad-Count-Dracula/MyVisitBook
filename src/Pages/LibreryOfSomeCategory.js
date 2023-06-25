import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { selectorForLibrary } from '../utils/selectorForLibrary';
import { useContext } from 'react';
import CommonContext from '../Context/Index';
import ItemOfPLace from '../UI/ItemOfPlace';

const LibraryOfSomeCategory = ({ route }) => {

    const { libraryItems } = useContext(CommonContext);

    const { category } = route.params;
    const categotyText = JSON.stringify(category)
    const sortedArray = selectorForLibrary(libraryItems, categotyText)

    return <ScrollView>
        <View style={styles.container} >
            {sortedArray.map((place) => <ItemOfPLace key={place.id} place={place} />)}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
})

export default LibraryOfSomeCategory;