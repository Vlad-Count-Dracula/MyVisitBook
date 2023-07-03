import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import CommonContext from '../Context/Index';
import { uniqueCollaction } from '../utils/setCollaction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSortedPostsCategoty } from '../CostomeHooks/UseSortedOfSearching';

// Идея в том что есть страница с общей беблиотекой и есть страница где находятся уже собранные в группы коллекции мест согласно категориям . 



function Collections({ navigation }) {

  const { libraryItems, isSearch, setTextForSearch, textForSearch } = React.useContext(CommonContext)

  const listOfCategoryPlaces = uniqueCollaction(libraryItems)
  const sortedListsBySearching = useSortedPostsCategoty(textForSearch, listOfCategoryPlaces)


  return (
    <ScrollView>
      {isSearch ? <View style={styles.textInput} >
        <TextInput
          placeholder='Write a category or the name of some place!'
          onChangeText={(value) => {
            setTextForSearch(value)
          }}
        />
      </View> : ''}
      <View style={styles.container}>
        {sortedListsBySearching.map(category => <TouchableOpacity onPress={() => navigation.navigate('LibraryOfSomeCategory', { category: category })}
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
  },
  textInput: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
},
})

export default Collections;