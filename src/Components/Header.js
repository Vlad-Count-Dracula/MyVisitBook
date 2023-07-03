import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Header } from '@rneui/themed';
import Logo from '../UI/Logo';
import { useContext } from 'react';
import CommonContext from '../Context/Index';
import { toggleSwitch } from '../utils/toggleSwith';

// В общем хидер это .

const MyHeader = (props) => {

    const { isSearch, setIsSearch, setTextForSearch } = useContext(CommonContext)


    return (
        <View >
            <Header

                leftComponent={
                    <TouchableOpacity
                        style={{ marginVertical: 20 }}
                        onPress={() => props.navigation.openDrawer()} >
                        <FontAwesomeIcon icon={faBars} color='#fff' size={40} />
                    </TouchableOpacity>}

                centerComponent={<Logo />}

                rightComponent={
                    <TouchableOpacity onPress={() => toggleSwitch(setIsSearch)} style={{ marginVertical: 20 }} >
                        <FontAwesomeIcon icon={faMagnifyingGlass}
                            color='#fff' size={40} />
                    </TouchableOpacity>}

                containerStyle={{
                    backgroundColor: '#000',
                    height: 100,

                }}
            />
            <View>
                {/* {isSearch ? <View style={styles.textInput} >
                    <TextInput
                        placeholder='Write a category or the name of some place!'
                        onChangeText={(value) => {
                            setTextForSearch(value)
                        }}
                    />
                </View> : ''} */}
            </View>
        </View>
    )
};



const styles = StyleSheet.create({
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

export default MyHeader;