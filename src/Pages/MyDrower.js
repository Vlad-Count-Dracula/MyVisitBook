import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyHeader from '../Components/Header';
import Library from './Library';
import Collections from './Collections';
import AddNewPlacePage from './AddNewPlacePage';
import LibraryOfSomeCategory from './LibreryOfSomeCategory';

// Навигация по сайту 
 const Drawer = createDrawerNavigator();

 function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000',
        },
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 35, 
        },
        drawerActiveBackgroundColor: '#F0FFFF',
        drawerPosition: 'left',
        header: ({ navigation }) => {
          return <MyHeader navigation={navigation} />;
        }
      }}
    >
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="Collections" component={Collections} />
      <Drawer.Screen name="Add Place" component={AddNewPlacePage} />
      <Drawer.Screen name="LibraryOfSomeCategory" component={LibraryOfSomeCategory} 
      options={{
        drawerItemStyle: { height: 0 }
      }}/>
    </Drawer.Navigator>
  );
}


export default MyDrawer;