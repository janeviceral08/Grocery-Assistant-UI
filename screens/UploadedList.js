import React, { useState } from "react";
import { Text, StyleSheet, View, Image , TouchableOpacity, Dimensions, TextInput, Alert} from "react-native";
import { Card, ListItem, Button, Icon, Overlay, Divider, Input, Badge } from 'react-native-elements'
import AppHeader from "../components/AppHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import SearchBar from "../components/SearchBar";
import { SwipeListView } from 'react-native-swipe-list-view';

const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height/ 2;

const UploadedList = ({ navigation }) => {
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
    ]
    const UploadedListData = [
        {
           name: 'List 1',
        },
        {
            name: 'List 2',
         },
         {
            name: 'List 3',
         },
    ]
    
    const onDeleteAllConfirmation = (List) =>
    Alert.alert(
      "Delete "+ List.name +' ?',
      "Are you sure you want to delete this list?",
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
            center={<Text style={{fontSize: 25, color: 'white'}}>Shopping Lists</Text>}
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
        


        <SwipeListView
            data={UploadedListData}
            renderItem={ (datas, rowMap) => (
                <Card containerStyle={{marginTop:10}} key={rowMap}>
                <View style={styles.listStyle}>
                    <Text style={styles.listHeader}>{datas.item.name}</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('List Details')}>
                    <Feather name={'edit'} size={25} color="#3D6DCC"/>
                    </TouchableOpacity>
                </View>
               
               
            </Card>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <Card containerStyle={{marginTop:10}} key={rowMap}>
                <View style={styles.listStyle}>
                    <Text style={styles.listHeader}>&nbsp;</Text>
                    <TouchableOpacity onPress={()=>onDeleteAllConfirmation(data.item)}>
                    <Feather name={'trash'} size={25} color="red"/>
                    </TouchableOpacity>
                </View>
               
               
            </Card>
            )}
            rightOpenValue={-75}
        />



          

          

         

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
},
rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
},
});

export default UploadedList;
