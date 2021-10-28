import React, { useState } from "react";
import { Text, StyleSheet, View, Image , TouchableOpacity, Dimensions, TextInput, Alert} from "react-native";
import { Card, ListItem, Button, Icon, Overlay, Divider, Input, Badge } from 'react-native-elements'
import AppHeader from "../components/AppHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import SearchBar from "../components/SearchBar";

const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height/ 2;

const ShoppingListDetails = ({ navigation }) => {
const [visible, toggleOverlay] = useState(false);
const [edit, toggleEdit] = useState(false);
const [item, setItem] = useState('');
const [search, toggleSearch] = useState(false);
const [term, setTerm] = useState('');
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


    const onDeleteAllConfirmation = () =>
    Alert.alert(
      "Delete All Item?",
      "Are you sure you want to delete all item on this list?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const onDeleteConfirmation = (item) =>
    Alert.alert(
      `Delete ${item.name}?`,
      `Are you sure you want to delete ${item.name} from this list?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const onClickEdit = (item) => {
        setItem(item.name)
        toggleEdit(true)
    }

  return (
      <View style={{flex:1}}>
          {
              search ? 
              <AppHeader
              centerStyle={{flex: 100}}
              center={
                  <SearchBar 
                  term={term} 
                  onTermChange={setTerm}
              >
              <TouchableOpacity style={styles.iconStyle} onPress={() => toggleSearch(!search)}>
              <Feather  name={'x-circle'} size={25} color="black"/>
              </TouchableOpacity>
              </SearchBar> 
              }
              
          /> :
          <AppHeader 
            left={
                <TouchableOpacity onPress={()=> navigation.goBack()}> 
                    <Ionicons name={'arrow-back-circle-outline'} size={30} color="white"/>
                </TouchableOpacity>
            }
            center={<Text style={{fontSize: 25, color: 'white'}}>List Details</Text>}
            right={
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={toggleSearch}> 
                        <Ionicons name={'search-circle-outline'} size={33} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> toggleOverlay(true)}> 
                        <Ionicons name={'add-circle-outline'} size={30} color="white" style={{marginTop: 2}}/>
                    </TouchableOpacity>
                </View>
                }
            />
          }
        
        

            <Card containerStyle={{marginTop:30}}>
                <View style={styles.listStyle}>
                        <Text style={styles.listHeader}>List 1</Text>
                        <TouchableOpacity onPress={onDeleteAllConfirmation}>
                            <Text style={styles.deleteAll}>Delete All</Text>
                        </TouchableOpacity>
                </View>
                <Card.Divider/>
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
            </Card>

            <Overlay overlayStyle={styles.container} isVisible={edit} onBackdropPress={toggleEdit}>
                <Text style={styles.overlayHeadText}>Edit Item</Text>
                
                <TouchableOpacity style={styles.overlayXButton} onPress={toggleEdit}>
                    <Text style={styles.overlayXStyle}>X</Text>
                </TouchableOpacity>
                <Divider />
                <TextInput
                    value={item}
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        marginVertical: 10
                    }}
                    numberOfLines={2}
                />
               
                   <Button title="  Save  " buttonStyle={{borderRadius: 20}}/>
            </Overlay>

            <Overlay overlayStyle={styles.container} isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text style={styles.overlayHeadText}>UPLOAD LIST</Text>
                
                <TouchableOpacity style={styles.overlayXButton} onPress={toggleOverlay}>
                    <Text style={styles.overlayXStyle}>X</Text>
                </TouchableOpacity>
                <Divider />
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 5,
                        marginVertical: 10
                    }}
                    numberOfLines={2}
                />
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                   
                    <Button  
                        icon={{
                            name: "attach-file",
                            size: 25,
                            color: "white"
                        }} 
                        
                        buttonStyle={{borderRadius: 20}}
                        />
                   <Button title="  Save  " buttonStyle={{borderRadius: 20}}/>
                </View>
                
            </Overlay>
      </View>
  );
};

const styles = StyleSheet.create({
    overlayHeadText: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 18,
    paddingVertical: 3
  },
  container: {
      width: windowHeight - 100,
      height: windowWidth,
      borderRadius: 20
  },
  listStyle: {
      flexDirection: 'row', 
      justifyContent:'space-between'
  },
  listHeader:{
      fontSize: 18,
      fontWeight:'bold'
  },
  deleteAll: {
      color: 'salmon',
      textDecorationLine: 'underline'
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15,
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
}
});

export default ShoppingListDetails;
