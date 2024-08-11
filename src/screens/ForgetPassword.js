import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Createaccount({navigation}) {

    const [phoneNumber, setPhoneNumber] = useState('');
  
  return (
    <View style={{flex:1}}>

        <View>

        <TouchableOpacity
        onPress={()=>navigation.navigate("SignIn")}
         style={{top:hp('6%'),left: 15}}>

<AntDesign name="arrowleft" size={26} color="black" /> 
</TouchableOpacity>

        

        <View style={{top:hp('7%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:700,fontFamily:'serif'}}> 
           Password Recovery
            </Text>

            <Text style={{fontSize:20,fontWeight:400,color:'black',textAlign:'center',fontFamily:'serif'}}>
           Please enter your phone number to recover your password.
             
            </Text>


            </View>

            <View style={{top: hp('15%'),alignItems:'center'}}>


            <View>
                <Text style={{fontFamily:'serif',paddingBottom:('3%'),fontWeight:600,fontSize:17}}>
                    Phone Number
                </Text>

                <View>
                    <Ionicons name="call-outline" size={24} color="#E3242B"
                    
                    style={{
                  position:'absolute',
                  left:10,
                      top:hp('1%'),
                  width: 25,
                }}
                    />
               
                <TextInput
      style={{
      color:'black',
       borderColor: '#E3242B', 
       borderWidth: 1,
       height:hp('6%'),
       width: wp('80%'),
       borderRadius:35,
       paddingLeft: 50 ,
        fontSize:20
   }}
  
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType='phone-pad'
      />
      </View>
               
         
            
           
               
            </View>

           

            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('60%')}}>
            <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyOTP")}
            style={{height:hp('6.4%'),
            width:wp ('70%'),
            backgroundColor:'#E3242B',
            borderRadius:36}} 
        >
          <Text style={{fontFamily:'serif',color:'#fff',textAlign:'center',top:hp ('1.7%'),fontSize:18,fontWeight:500}}>Get Started</Text>

        </TouchableOpacity>

               
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}