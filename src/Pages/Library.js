import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import CommonContext from '../Context/Index';
import ModalActionOfPlace from '../Components/ModalActionOfPlace';
import ItemOfPLace from '../UI/ItemOfPlace';
import { useSortedPosts } from '../CostomeHooks/UseSortedOfSearching';

// Отоброжение страницы с местами 

function Library() {

  const { libraryItems, isSearch } = React.useContext(CommonContext)
  const [text, setText] = React.useState('')
  const sortedBySearching = useSortedPosts(text , libraryItems)

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Поисковая строка */}
        {isSearch ? <View style={styles.textInput} >
          <TextInput
             placeholder='Write a category or the name of some place!'
             onChangeText={(value) => {
              setText(value)
             }}
          />
        </View> : ''}
        {sortedBySearching.length == 0 ? <ModalActionOfPlace /> :
          sortedBySearching.map((place) => <ItemOfPLace key={place.id} place={place} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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

export default Library;