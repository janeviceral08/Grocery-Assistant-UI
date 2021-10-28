import React from "react";
import { ScrollView } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { ListItem, Avatar, Icon } from 'react-native-elements'

const SideMenu = ({ navigation }) => {

  const logOut = () => {
      console.log('Logged Out')
  }
  return (
    <View style={{flex: 1, marginTop: 30}}>
        <ScrollView>
            <ListItem  bottomDivider onPress={()=> navigation.navigate('Home')}>
                <Icon name="home" color="#3D6DCC"/>
                <ListItem.Content>
                <ListItem.Title>Home</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem  bottomDivider onPress={()=> navigation.navigate('List')}>
                <Icon name="list" color="#3D6DCC"/>
                <ListItem.Content>
                <ListItem.Title>List</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ScrollView>

        <ListItem  bottomDivider onPress={()=> logOut()}>
            <Icon name="logout" color="#3D6DCC"/>
            <ListItem.Content>
            <ListItem.Title>Logout</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SideMenu;
