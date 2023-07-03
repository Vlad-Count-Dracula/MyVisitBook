import * as React from 'react';
import { View, } from 'react-native';
import ModalActionOfPlace from '../Components/ModalActionOfPlace';
import { useContext } from 'react';
import CommonContext from '../Context/Index';
import { uniqueId } from '../utils/uniqueId';

// Отдельная страница для добавления нового места , хотя логично будет добавить кнопку в конец списка всех мест .

function AddNewPlacePage({ navigation }) {
  const id = uniqueId
  const { modal, setModal } = useContext(CommonContext);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {/*Action to add new place */}
        <ModalActionOfPlace
          navigation={navigation} uniqueId={id} modal={modal} setModal={setModal}
          textForOpen='Add new Place !' textForClose='Create a new Place !' />
      </View>
    </View>
  );
}

export default AddNewPlacePage;