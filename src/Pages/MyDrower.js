import * as React from 'react';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import MyHeader from '../Components/Header';
import Library from './Library';
import Collections from './Collections';
import AddNewPlacePage from './AddNewPlacePage';

// Навигация по сайту 

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000',
          width: 300,
        },
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 35,
          marginLeft: 35,
        },
        drawerActiveBackgroundColor: '#F0FFFF',
        drawerPosition: 'right',
        header: ({ navigation }) => {
          return <MyHeader navigation={navigation} />;
        }
      }}
    >
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="Collections" component={Collections} />
      <Drawer.Screen name="Add Place" component={AddNewPlacePage} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;