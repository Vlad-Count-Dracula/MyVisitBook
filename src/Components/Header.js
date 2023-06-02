import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
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

    const { setIsSearch } = useContext(CommonContext)


    return (
        <View >
            <Header

                leftComponent={<TouchableOpacity onPress={() => toggleSwitch(setIsSearch)} style={{ marginVertical: 20 }} >
                    <FontAwesomeIcon icon={faMagnifyingGlass}
                        color='#fff' size={40} />
                </TouchableOpacity>}

                centerComponent={<Logo />}

                rightComponent={<TouchableOpacity
                    style={{ marginVertical: 20 }}
                    onPress={() => props.navigation.openDrawer()} >
                    <FontAwesomeIcon icon={faBars} color='#fff' size={40} />
                </TouchableOpacity>}

                containerStyle={{
                    backgroundColor: '#000',
                    height: 100,
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
})

export default MyHeader;