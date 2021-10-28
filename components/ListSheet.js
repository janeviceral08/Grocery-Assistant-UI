import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions, ScrollView, Image, Alert } from "react-native";
import { ListItem, Avatar, Badge, withBadge, Overlay, Divider, Button, Icon, Card, Input } from 'react-native-elements'
import formatMoney from 'accounting-js/lib/formatMoney.js'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height/ 2;



export function ListSheet({ visible, closeOverlay, ListInfo }) {
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

      <Overlay 
      isVisible={visible}
      onBackdropPress={closeOverlay}
      overlayStyle={styles.container}>
                <Text style={styles.overlayHeadText}>&nbsp;</Text>
                
                <TouchableOpacity style={styles.overlayXButton} onPress={closeOverlay}>
                    <Text style={styles.overlayXStyle}>X</Text>
                </TouchableOpacity>
                <Divider />
                <View style={styles.viewContainer}>
    <Text style={{fontSize: 21,  fontWeight:'bold' }}>{ListInfo.name}</Text>
      <Divider />
      <View style={styles.storeView}>
        <AntDesign name={'isv'} size={23} color="orange"/>
        <Text style={{ fontSize: 15 }}> {ListInfo.list}</Text>
      </View>
      <View style={styles.storeView}>
        <Ionicons name={'ios-location-outline'} size={25} color="orange"/>
        <Text style={{ fontSize: 15 }}> {ListInfo.location}</Text>
      </View>
    </View>

    <View style={styles.viewContainer}>
      <Text style={styles.text}>3/5 Matches</Text>
      <Divider />
      <ScrollView style={{maxHeight: windowHeight}}>
      {
                    list_1.map((u, i) => {
                    return (
                        <View key={i} style={styles.listStyle}>
                            <Text style={styles.name}>{u.name}</Text>

                            <View style={{flexDirection:'row'}}>

                                <View style={{paddingHorizontal: 2}}>
                                <Text>{formatMoney(2000, { symbol: "₱", precision: 2 })}</Text>
                                </View>

                                <TouchableOpacity onPress={() => navigation.navigate('Details_Product', {ItemDetails: u, StoreInfo: ListInfo})} style={{paddingHorizontal: 2}}>
                                    <Ionicons name={'search'} size={27} color="#3D6DCC"/>
                                </TouchableOpacity>

                            </View>
                        </View>
                    );
                    })
                }
                </ScrollView>
    </View>

            </Overlay>            
        
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
