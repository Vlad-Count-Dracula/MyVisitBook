import React, { useState } from 'react';
import { useContext } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity  } from 'react-native';
import CommonContext from '../Context/Index';
import { useFonts } from 'expo-font';

// Модальное окно которое всплывает при удалении места для подтверждения операции .

const ModalOfQuestion = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { setIsDeletePlase } = useContext(CommonContext)
    const [fontsLoaded] = useFonts({
        'Fasthand-Regular': require('../../assets/fonts/Fasthand-Regular.ttf'),
        'PlayfairDisplay-Bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
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
                        <Text style={styles.modalText}>{props.question}</Text>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setIsDeletePlase({ answer: true, id: props.id })

                                }
                                }>
                                <Text style={styles.textStyle}>{props.agree}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setIsDeletePlase({ answer: false, id: props.id })
                                }
                                }>
                                <Text style={styles.textStyle}>{props.disAgree}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>{props.action}</Text>
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
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 10,
        
    },
    buttonOpen: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#B9A7A7',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#C2B9B9',
        opacity: 0.8,
        
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 300,
    },
    modalText: {
        marginBottom: 15,
    },
});

export default ModalOfQuestion;