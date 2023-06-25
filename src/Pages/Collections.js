import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CommonContext from '../Context/Index';
import { uniqueCollaction } from '../utils/setCollaction';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Идея в том что есть страница с общей беблиотекой и есть страница где находятся уже собранные в группы коллекции мест согласно категориям . 



function Collections({ navigation }) {

  const { libraryItems } = React.useContext(CommonContext)

  const listOfCategoryPlaces = uniqueCollaction(libraryItems)

  return (
    <ScrollView>
      <View style={styles.container}>
        {listOfCategoryPlaces.map(category => <TouchableOpacity onPress={() => navigation.navigate('LibraryOfSomeCategory', {category: category})}
          key={category} >
          <View style={styles.categoryButton} >
            <Text style={styles.textOfButton} >{category}</Text>
          </View>
        </TouchableOpacity>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  categoryButton: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 25,
    opacity: 0.9,
  },
  textOfButton: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 300,
  }
})

export default Collections;