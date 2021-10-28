import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, PermissionsAndroid } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/gps.png')} style={{height: 300, width: 300}} />,
            title: 'Find Specific Grocey Items',
            subtitle: 'A New and Easiest Way To Find Your Grocery Items',
          },
          {
            backgroundColor: '#00bb96',
            image: <Image source={require('../assets/store.png')} style={{height: 300, width: 300}} />,
            title: 'Help Store Owners',
            subtitle: 'Help Store Owners Creating and Organizing Their Computerized Store',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/shopper.png')} style={{height: 300, width: 300}} />,
            title: 'Buy All The Items You Needed',
            subtitle: "Shopping Without Going Everywhere. Less Hassle",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
