import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import ModalOfQuestion from '../Components/ModalOfQuestion';
import { useFonts } from 'expo-font';
import { toggleSwitch } from '../utils/toggleSwith'; 
import ModalActionOfPlace from '../Components/ModalActionOfPlace';
import { useContext } from 'react';
import CommonContext from '../Context/Index';

// Отвечает за отображение онформации о месте и предоставляет варианты манипуляций с ним .

const ItemOfPLace = ({ place }) => {

  const [isOptions, setIsOptions] = React.useState(false);
  const { updatedPlase, setUpdatedPlace } = useContext(CommonContext)

  const [fontsLoaded] = useFonts({
    'Fasthand-Regular': require('../../assets/fonts/Fasthand-Regular.ttf'),
    'PlayfairDisplay-Bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <View style={styles.item}>
    <View style={styles.itemInfo} >
      <View style={styles.itemInfoHeader} >
        <View style={styles.itemInfoHeaderCategory} >
          <FontAwesomeIcon style={styles.itemInfoHeaderCategoryIcon} icon={faLayerGroup} size={25} />
          <Text style={styles.itemInfoHeaderCategoryText} >{place.category}</Text>
        </View>
        {/* Отвечает за отображение дополнительных опций */}
        <TouchableOpacity  onPress={() => toggleSwitch(setIsOptions)} >
          <View style={styles.itemInfoHeaderCategoryButtonOptions} >
            <FontAwesomeIcon icon={faEllipsisVertical} color='#fff' />
          </View>
        </TouchableOpacity >
        {isOptions ?
          <View style={styles.itemInfoHeaderCategoryActiveButtonOptions} >
            <View>
              {/*Action to update existence place */} 
              <ModalActionOfPlace uniqueId={place.id} modal={updatedPlase} setModal={setUpdatedPlace} textForOpen='Edit info' textForClose='Safe new info' />
            </View>
          </View> :
          null}
      </View>
      <View style={styles.itemInfoBodyText} >
        <View style={styles.itemInfoBodyTextName} >
          <Text style={styles.itemInfoBodyTextNameStyle} >Name :</Text>
        </View>
        <Text style={styles.itemInfoBodyTextNamePlace} >{place.place}</Text>
      </View>
      <View style={styles.itemInfoBodyDescriptionArea} >
        <View style={styles.itemInfoBodyDescription} >
          <Text style={styles.itemInfoBodyDescriptionStyle} >Description :</Text>
        </View>
        <View style={styles.itemInfoBodyDescriptionText} >
          <Text style={styles.itemInfoBodyDescriptionTextStyle} >{place.description}</Text>
        </View>
      </View>
    </View>
    <View style={styles.itemInfoBodyDeleteButton} >
      {/* Кнопка для удаления поста */}
      <ModalOfQuestion id={place.id} question='Are you shure ?' agree='Yes' disAgree='No' action='Delete place' />

    </View>
  </View>
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 5,
    width: '90%',
    marginVertical: 10,
  },
  itemInfo: {
    marginLeft: 15,
    marginRight: 10,
  },
  itemInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  itemInfoHeaderCategory: {
    flexDirection: 'row',
  },
  itemInfoHeaderCategoryIcon: {
    marginTop: 15,
  },
  itemInfoHeaderCategoryText: {
    marginTop: 12,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 800,
  },
  itemInfoHeaderCategoryButtonOptions: {
    marginTop: 10,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    opacity: 0.8,
    elevation: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  itemInfoHeaderCategoryActiveButtonOptions: {
    position: 'absolute',
    right: 40,
  },
  itemInfoBodyText: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemInfoBodyTextName: {
    width: 80,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  itemInfoBodyTextNameStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 800,
  },
  itemInfoBodyTextNamePlace: {
    fontSize: 23,
    fontWeight: 400,
    marginLeft: 7,
  },
  itemInfoBodyDescriptionArea: {
    width: '100%',
    backgroundColor: '#FAF0E6',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: -5,
  },
  itemInfoBodyDescription: {
    width: 130,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  itemInfoBodyDescriptionStyle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 800,
  },
  itemInfoBodyDescriptionText: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  itemInfoBodyDescriptionTextStyle: {
    fontSize: 15,
    fontWeight: 500,
  },
  itemInfoBodyDeleteButton: {
    marginBottom: 20,
  },
})

export default ItemOfPLace;