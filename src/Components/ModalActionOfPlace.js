import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

// Стараюсь сделать переиспользуемое модальное окно ...

const ModalActionOfPlace = ({ uniqueId, modal, setModal, textForOpen, textForClose, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Formik
              initialValues={{ uniqueId: uniqueId, name: '', description: '', newCategory: '', }}
              onSubmit={values => setModal({ ...modal, values })}
            >
              {/* insertInto(configurationName.dbName, uniqueId, values.newCategory, values.name, values.description) */}
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <TextInput
                    placeholder='Create the new category'
                    onChangeText={handleChange('newCategory')}
                    onBlur={handleBlur('newCategory')}
                    value={values.newCategory}
                  />
                  <TextInput
                    placeholder='Write the name of the place'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <TextInput
                    placeholder='Write the description of the place'
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                  />
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible)
                      handleSubmit()
                      navigation.navigate('Library')
                    }}>
                    <Text style={styles.textStyle}>{textForClose}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{textForOpen}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#000',
  },
  buttonClose: {
    backgroundColor: '#000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalActionOfPlace;