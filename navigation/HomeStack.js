import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';
import UploadedList from '../screens/UploadedList';

const Stack = createStackNavigator();

const HomeStack = () => {
    
  let routeName;
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{header: () => null}}
      />
     
    </Stack.Navigator>
  );
};

export default HomeStack;
