import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions, ScrollView, Image, Alert } from "react-native";
import { Avatar, Badge, withBadge, Overlay, Divider, Button, Icon, Card, Input } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ListItems } from "./ListItem";


const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height/ 2;



const List = () => {
    const navigation = useNavigation();
    const [toggle, toggleList] = useState(false);
    const list = [
        {
          name: 'SM Store',
          list: 'List 1',
          location: 'Brgy J C Aquino Ave, Butuan City, 8600 Agusan Del Norte',
          
        },
        {
          name: 'Robinson',
          list: 'List 1',
          location: 'J C Aquino Ave, Butuan City, 8600 Agusan Del Norte'
        },
        {
            name: 'Price Hypermart',
            list: 'List 1',
            location: 'A. Curato Street, Cabadbaran City, 8605 Agusan Del Norte'
          },
          {
            name: 'VillaHermosa',
            list: 'List 1',
            location: 'Cabadbaran City, Agusan Del Norte'
          },
          {
            name: 'Citi Hardware',
            list: 'List 1',
           location: '3 J C Aquino Ave, Butuan City, 8600 Agusan Del Norte'
          },
      ]
      const list_1 = [
        {
           name: 'Huawei',
        },
        {
            name: 'Adidas Shoes',
         },
         {
            name: 'Lenovo',
         },
         {
            name: 'Hammer Head Pants',
         },
         {
            name: 'Sample Item 5',
         },
         {
            name: 'Sample Item 6',
         },
         {
            name: 'Sample Item 7',
         },
         {
            name: 'Sample Item 8',
         },
         {
            name: 'Sample Item 9',
         },
         {
            name: 'Sample Item 10',
         },
         {
            name: 'Sample Item 5',
         },
         {
            name: 'Sample Item 5',
         },
         {
          name: 'Huawei',
       },
       {
           name: 'Adidas Shoes',
        },
        {
           name: 'Lenovo',
        },
        {
           name: 'Hammer Head Pants',
        },
        {
           name: 'Sample Item 5',
        },
        {
           name: 'Sample Item 6',
        },
        {
           name: 'Sample Item 7',
        },
        {
           name: 'Sample Item 8',
        },
        {
           name: 'Sample Item 9',
        },
        {
           name: 'Sample Item 10',
        },
        {
           name: 'Sample Item 5',
        },
        {
           name: 'Sample Item 5',
        },
        
    ]
      const [edit, toggleEdit] = useState(false);

  return (
    <ScrollView style={{flex: 1, margin: 10}}>
      <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 20}}>RESULTS: </Text>
    {
      list.map((l, i) => (
        <ListItems item_info={l} keyIndex={i} key={i} />
      ))
    }
  </ScrollView>
  );
};

const styles = StyleSheet.create({
 priceText : {
    color: 'orange', 
    fontSize: 17,
    fontWeight:'bold'
 },
 container: {
  width: windowHeight - 50,
 
  borderRadius: 20
},

overlayXButton: {
  backgroundColor:'salmon',
  width: 25,
  height:25,
  justifyContent:'center',
  alignItems:'center',
  position: 'absolute', 
  top: 5, 
  right: 5,
  borderRadius: 20
},
overlayXStyle :{
  color: 'white',
  fontWeight:'bold'
},
overlayHeadText: {
  textAlign:'center',
  fontWeight:'bold',
  fontSize: 18,
  paddingVertical: 3
},
listStyle: {
  flexDirection: 'row', 
  justifyContent:'space-between'
},
viewContainer: {
  backgroundColor:'white', 
  padding: 10,
},
storeView: {
  flexDirection:'row',
  paddingVertical: 5
},
text: { 
  fontSize: 15, 
  fontWeight:'bold' 
},
});

export default List;
