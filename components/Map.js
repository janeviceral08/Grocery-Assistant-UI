import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const Map = () => {
  return(
      <View style={styles.container}>
            <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 8.94917,
         longitude: 125.54361,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default Map;
