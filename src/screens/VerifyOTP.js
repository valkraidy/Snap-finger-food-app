import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';

import { Account, Client } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('669f868700200a22247f');                // Your project ID

const account = new Account(client);


export default function VerifyOTP({ navigation, route }) {
    const [otp, setOtp] = useState('');
    const { phoneNumber, generatedOtp } = route.params;

    
   

    const handleVerifyOTP = async () => {
        if (otp === generatedOtp.toString()) {
            try {
                // Create a session or just navigate to home if session is already created
                await account.createSession(phoneNumber, otp);
                Alert.alert('Success', 'OTP Verified. Redirecting to Home.');
                navigation.navigate('Home'); // Navigate to Home page
            } catch (error) {
                console.error('Failed to verify OTP:', error);
                Alert.alert('Error', 'Failed to verify OTP. Please try again.');
            }
        } else {
            Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
    };
    
  return (


    <View style={{flex:1}}>

        <View>

            <TouchableOpacity
            onPress={()=>navigation.navigate("SignUp")}
            style={{top:hp('6%'),left:15}}>

            <AntDesign name="arrowleft" size={26} color="black" /> 
            </TouchableOpacity>

        

          <View style={{top:hp('10%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'serif',fontSize:24,fontWeight:700}}> 
              Verify OTP
            </Text>

            <Text style={{fontFamily:'serif',fontSize:18,fontWeight:400,color:'black',textAlign:'center'}}>
            Your Pass Code Has Been Sent To
             +233241482993
            </Text>

        </View>

        <View style={{top:hp('20%'),alignItems:'center',flexDirection:'row',justifyContent:'center',gap:20}}>
   
            <TextInput
                style={{
                    borderColor: '#E3242B',
                    borderWidth: 1,
                    height: hp('6%'),
                    width: wp('80%'),
                    borderRadius: 10,
                    paddingLeft: 15,
                    fontSize: 18,
                    marginBottom: 20,
                }}
                value={otp}
                onChangeText={setOtp}
                keyboardType='numeric'
                placeholder="Enter the OTP"
            />

            
          
               

              
        </View>

        <View style={{fontSize:24,top:hp('25%',)}}>
            <Text style={{fontFamily:'serif',textAlign:'center',fontSize:17}}>
                Didn't recieve any code? <Text style={{color:'#E3242B'}}> Resend (2s) </Text>
            </Text>
        </View>

       

            <View style={{justifyContent:'center',alignItems:'center',top: hp('55%')}}>
                <TouchableOpacity
                    onPress = {handleVerifyOTP}

                    style={{height:hp('6.4%'),
                    width:wp ('70%'),
                    backgroundColor:'#E3242B',
                    borderRadius:36}} 
                >
                      <Text style={{fontFamily:'serif',color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:18,fontWeight:500}}>Get Started</Text>

                </TouchableOpacity>

               
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}
