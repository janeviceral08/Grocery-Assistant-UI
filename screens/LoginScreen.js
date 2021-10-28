import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';


import Svg, { Path } from 'react-native-svg';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  return (
    <View style={{flex: 1}}>
        <Svg
          height="60%"
          width="100%"
          style={{ position: 'absolute', top: 0, }}
        >
          <Path
          fill="#0099ff" 
          fill-opacity="1" 
          d="M0,192L40,208C80,224,160,256,240,229.3C320,203,400,117,480,80C560,43,640,53,720,90.7C800,128,880,192,960,229.3C1040,267,1120,277,1200,266.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"/>
        </Svg>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}
   >
        <View style={styles.logo_container}>
        <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Assistant Shopper</Text>
      </View>
    <ScrollView contentContainerStyle={styles.container}>
     

      
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
     
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Login"
        onPress={() => navigation.navigate('Drawer')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() =>console.log('Forgot Password')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo_container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  container: {
    justifyContent: "flex-end",
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0099ff',
    fontFamily: 'Lato-Regular',
  },
});
