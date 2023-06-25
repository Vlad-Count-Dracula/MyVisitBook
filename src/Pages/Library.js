import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import CommonContext from '../Context/Index';
import ModalActionOfPlace from '../Components/ModalActionOfPlace';
import ItemOfPLace from '../UI/ItemOfPlace';
import { useSortedPosts } from '../CostomeHooks/UseSortedOfSearching';

// Отоброжение страницы с местами 

function Library() {

  const { libraryItems, textForSearch } = React.useContext(CommonContext)
  const sortedBySearching = useSortedPosts(textForSearch , libraryItems)

  return (
    <ScrollView>
      <View style={styles.container}>
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
})

export default Library;