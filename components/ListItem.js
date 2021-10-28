import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions, ScrollView, Image, Alert } from "react-native";
import { ListItem, Avatar, Badge, withBadge, Overlay, Divider, Button, Icon, Card, Input } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ListSheet } from "./ListSheet";


const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height/ 2;



export function ListItems({ item_info, keyIndex }) {
    const navigation = useNavigation();
    const [toggle, toggleList] = useState(false);
   
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
      <>
      <ListSheet 
      visible={toggle}
      closeOverlay={() => {
        toggleList(false);
      }}
      ListInfo={item_info}
      />
    <ListItem style={{marginBottom: 10}} pad={5} bottomDivider key={keyIndex} onPress={()=> toggleList(true)}>
           <ListItem.Content>
             <View style={{flexDirection: 'row', width: '100%'}}>
        <ListItem.Title numberOfLines={2} style={{fontWeight: 'bold'}}>{item_info.name}</ListItem.Title>
        <ListItem.Subtitle style={{marginLeft: 'auto'}}>3/5 Matched Items</ListItem.Subtitle>
        </View>
        <ListItem.Subtitle>List: {item_info.list}</ListItem.Subtitle>
        <ListItem.Subtitle>Location: {item_info.location}</ListItem.Subtitle>
      </ListItem.Content>
      
        </ListItem>
        </>
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


