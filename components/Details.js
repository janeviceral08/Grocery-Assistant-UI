import React, { useState } from 'react';
import { Button, Divider, Overlay, Card, ListItem, Icon, Input, Badge  } from 'react-native-elements';
import { Text, StyleSheet, View, ScrollView, Image , Dimensions, TextInput, Alert, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import formatMoney from 'accounting-js/lib/formatMoney.js'

const Details_Product = ({ navigation, route }) => {

  const [image, setImages] = useState([
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree", // Network image
    ])
    const Item_Info = route.params.ItemDetails;
    const Store_info = route.params.StoreInfo;
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
    <Text style={styles.text}>{Item_Info.name}</Text>
      <Divider />
      <View style={styles.storeView}>
      <Text style={{ fontSize: 20, color: "orange" }}> Price: </Text>
        <Text style={{ fontSize: 20 }}> {formatMoney(2000, { symbol: "₱", precision: 2 })}</Text>
      </View>
      <View style={styles.storeView}>
      <Text style={{ fontSize: 15, color: "orange"}}> Location: </Text>
        <Text style={{ fontSize: 15 }}> {Store_info.location}</Text>
      </View>
    </View>

   

    <TouchableOpacity style={styles.closeBtn} onPress={()=> navigation.goBack()}>
      <Ionicons name={'close-circle-outline'} size={40} color="white"/>
    </TouchableOpacity>

  </ScrollView>
  )
};

const styles = StyleSheet.create({
  text: { 
    fontSize: 22, 
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
    paddingVertical: 5,
    width: '90%'
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

export default Details_Product;
