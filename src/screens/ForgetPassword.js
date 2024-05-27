import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';



export default function Createaccount({navigation}) {

    const [phoneNumber, setPhoneNumber] = useState('');
  
  return (
    <View style={{flex:1}}>

        <View>

        <TouchableOpacity
        onPress={()=>navigation.navigate("Welcome")}
         style={{top:hp('8%')}}>

<AntDesign name="arrowleft" size={26} color="black" /> 
</TouchableOpacity>

        

        <View style={{top:hp('13%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:700}}> 
           Password Recovery
            </Text>

            <Text style={{fontSize:20,fontWeight:400,color:'black',textAlign:'center'}}>
           Please enter your phone number to recover your password
             
            </Text>


            </View>

            <View style={{top: hp('26%'),alignItems:'center'}}>


            <View>
                <Text style={{paddingBottom:('3%'),fontWeight:600,fontSize:17}}>
                    Phone Number
                </Text>

                <View>
               
                <TextInput
      style={{height: hp('6%'),
      color:'black',
       borderColor: '#E2E4EA', 
       borderWidth: 1,
       height:hp('7%'),
       width: wp('80%'),
       borderRadius:15,
       paddingLeft: 30 
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
          <Text style={{color:'#fff',textAlign:'center',top:hp ('1.7%'),fontSize:18,fontWeight:500}}>Get Started</Text>

        </TouchableOpacity>

               
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}