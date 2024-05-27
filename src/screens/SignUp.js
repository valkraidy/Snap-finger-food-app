import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';



export default function Createaccount({navigation}) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={{flex:1}}>

        <View>

        <TouchableOpacity
        onPress={()=>navigation.navigate("Welcome")}
         style={{top:hp('8%')}}>

<AntDesign name="arrowleft" size={26} color="black" /> 
</TouchableOpacity>

        

        <View style={{top:hp('7%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:700}}> 
              Getting Started
            </Text>

            <Text style={{fontSize:20,fontWeight:400,color:'black'}}>
            Let's create your account first
             
            </Text>


            </View>

            <View style={{top: hp('20%'),alignItems:'center'}}>


            <View>
                <Text style={{paddingBottom:('3%'),fontWeight:600}}>
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


            <View>
                <Text style={{fontWeight:600,paddingBottom:('3%')}}>
                    Username
                </Text>
                <View style={{position:'relative',keyboard:'default'}}>
              
                    <TextInput
            style={{ color:'#A7AEC1',
             borderColor: '#E2E4EA',
              borderWidth: 1,
              height:hp('7%'),
              width: wp('80%'),
              borderRadius:15,
              paddingLeft: 30,
              
             }}
      
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            placeholder=""
            keyboardType='default'
          />

            </View>
               
            </View>

            
          
            
            <View>

             
                <Text style={{paddingBottom:('3%'),fontWeight:600}}>
                    Password
                </Text>

                <View>


               
                <TextInput
        style={{ height: 40,
          color:'#A7AEC1',
           borderColor: '#E2E4EA',
            borderWidth: 1,
            height:hp('7%'),
            width: wp('80%'),
            borderRadius:15,
            paddingLeft: 30,
           

           }}

  
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder=""
        keyboardType='ascii-capable'
      />
      </View>

               
            </View>

            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('38%')}}>
            <TouchableOpacity
            onPress = {()=>navigation.navigate("VerifyOTP")}
            style={{height:hp('6.4%'),
            width:wp ('70%'),
            backgroundColor:'#E3242B',
            borderRadius:36}} 
        >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:18,fontWeight:500}}>Sign Up</Text>

        </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> navigation.navigate("SignIn")}
                style={{top:hp('2.5%')}}>
                    <Text style={{fontSize:18,fontWeight:400}}>
                       Already have an account? <Text style={{color:'#E3242B'}}> Sign In  </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}