import React, { useRef, useState } from "react";
import { TouchableHighlight, TouchableOpacity, Animated, Button , Easing} from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import AppHeader from "../components/AppHeader";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import Map from "../components/Map";


const HomeScreen = ({navigation}) => {
    const [search, toggleSearch] = useState(false);
    const [term, setTerm] = useState('');

  return(
    <Grid style={{flex: 1}}>
        <View  style={styles.viewContaner}>
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
                
            />
                :

                <AppHeader
                left={
                     <TouchableOpacity onPress={()=> navigation.openDrawer()}> 
                        <Ionicons name={'ios-list-circle-outline'} size={40} color="white"/>
                      </TouchableOpacity>
                      }
                center={<Text style={{fontSize: 30, color: 'white'}}>where2buy</Text>}
                right={
                     <TouchableOpacity onPress={toggleSearch}> 
                        <Ionicons name={'search-circle-outline'} size={40} color="white"/>
                      </TouchableOpacity>
                      } 
            />
            }
           
        </View>
        <Row size={1.4}>
            <Map />
        </Row>
        <Row size={2.2}>
            <List />
        </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
    container: {backgroundColor:'#3D6DCC'},
     iconStyle: {
            fontSize: 25,
            alignSelf: 'center',
            marginHorizontal: 15,
        },
});

export default HomeScreen;
