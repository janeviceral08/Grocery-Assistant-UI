import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import ProductDetails from '../screens/ProductDetails';
import UploadedList from '../screens/UploadedList';
import ShoppingListDetails from '../screens/ShoppingListDetails';
import SideMenu from '../components/SideMenu';
import Details_Product from '../components/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="List" component={UploadedList} />
      <Drawer.Screen name="List Details" component={ShoppingListDetails} />
      <Drawer.Screen name="Details_Product" component={Details_Product} />
    </Drawer.Navigator> 
  );
}
const  Logout = () => {
    console.log('Logged Out')
}

const Routes = () => {
  let routeName;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{header: () => null}}
        >
        </Stack.Screen>
      </Stack.Navigator>
         
    </NavigationContainer>
  );
};

export default Routes;
