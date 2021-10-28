import React, { useState } from 'react';
import { Button, Divider, Overlay, Card, ListItem, Icon, Input, Badge  } from 'react-native-elements';
import { Text, StyleSheet, View, ScrollView, Image , Dimensions, TextInput, Alert, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import formatMoney from 'accounting-js/lib/formatMoney.js'

const ProductDetails = ({ navigation, route }) => {
  const { details } = route.params;
  const [image, setImages] = useState([
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ])
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
  ]
  return (
  <ScrollView style={{backgroundColor:'lightgray', flex: 1}}>
    <SliderBox
      images={image}
      sliderBoxHeight={300}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
    />
      
    <View style={styles.viewContainer}>
    <Text style={styles.text}>Store Name</Text>
      <Divider />
      <View style={styles.storeView}>
        <AntDesign name={'isv'} size={23} color="orange"/>
        <Text style={{ fontSize: 20 }}> List 1</Text>
      </View>
      <View style={styles.storeView}>
        <Ionicons name={'ios-location-outline'} size={25} color="orange"/>
        <Text style={{ fontSize: 15 }}> Store Address</Text>
      </View>
    </View>

    <View style={styles.viewContainer}>
      <Text style={styles.text}>3/5 Matches</Text>
      <Divider />
      {
                    list_1.map((u, i) => {
                    return (
                        <View key={i} style={styles.listStyle}>
                            <Text style={styles.name}>{u.name}</Text>

                            <View style={{flexDirection:'row'}}>

                                <TouchableOpacity onPress={()=> onClickEdit(u)} style={{paddingHorizontal: 2}}>
                                    <Feather name={'edit'} size={25} color="#3D6DCC"/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => onDeleteConfirmation(u)} style={{paddingHorizontal: 2}}>
                                    <Ionicons name={'close-circle-outline'} size={27} color="salmon"/>
                                </TouchableOpacity>

                            </View>
                        </View>
                    );
                    })
                }
    </View>

    <TouchableOpacity style={styles.closeBtn} onPress={()=> navigation.goBack()}>
      <Ionicons name={'close-circle-outline'} size={40} color="white"/>
    </TouchableOpacity>

  </ScrollView>
  )
};

const styles = StyleSheet.create({
  text: { 
    fontSize: 15, 
    fontWeight:'bold' 
  },
  closeBtn: {
    position: 'absolute', top: 40, left: 10, borderRadius: 50, alignContent:'center'
  },
  viewContainer: {
    marginBottom: 10, 
    backgroundColor:'white', 
    padding: 20
  },
  storeView: {
    flexDirection:'row',
    paddingVertical: 5
  },
  priceText: {
    fontSize: 18, 
    color:"orange", 
    fontWeight:'bold'
  },
  listStyle: {
    flexDirection: 'row', 
    justifyContent:'space-between'
},
});

export default ProductDetails;
