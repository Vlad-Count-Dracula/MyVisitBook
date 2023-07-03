import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import CommonContext from '../Context/Index';
import ModalActionOfPlace from '../Components/ModalActionOfPlace';
import ItemOfPLace from '../UI/ItemOfPlace';
import { useSortedPosts } from '../CostomeHooks/UseSortedOfSearching';
import { uniqueId } from '../utils/uniqueId';

// Отоброжение страницы с местами 

function Library({ navigation }) {
  const id = uniqueId
  const { libraryItems, textForSearch, modal, setModal, setTextForSearch, isSearch } = React.useContext(CommonContext)
  const sortedBySearching = useSortedPosts(textForSearch, libraryItems)

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
        {sortedBySearching.length == 0 ? <ModalActionOfPlace
          navigation={navigation} uniqueId={id} modal={modal} setModal={setModal}
          textForOpen='Add new Place !' textForClose='Create a new Place !' /> :
          sortedBySearching.map((place) => <ItemOfPLace navigation={navigation} key={place.id} place={place} />)}
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