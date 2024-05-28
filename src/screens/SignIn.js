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
             Let's Get You Signed In
            </Text>

            <Text style={{fontSize:20,fontWeight:400,color:'black'}}>
           Welcome Back
             
            </Text>


            </View>

            <View style={{top: hp('20%'),alignItems:'center'}}>


            <View>
                <Text style={{paddingBottom:('3%'),fontWeight:600,fontSize:17}}>
                    Phone Number
                </Text>

                <View>
               
                <TextInput
      style={{height: hp('6%'),
      color:'black',
       borderColor: '#E3242B', 
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

             
                <Text style={{fontWeight:600,top:10,fontSize:17}}>
                    Password
                </Text>

                <View style={{top:20}}>


               
                <TextInput
        style={{ height: 40,
          color:'black',
           borderColor: '#E3242B',
            borderWidth: 1,
            height:hp('7%'),
            width: wp('80%'),
            borderRadius:15,
            paddingLeft: 30,
            fontSize:20
           }}

        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder=""
        keyboardType='phone-pad'
      />
      </View>

               
            </View>

            <View>
                <TouchableOpacity
                style={{right:wp('-25%'),top:hp('5%')}}
                onPress={()=>navigation.navigate("ForgetPassword")}
                >

                    <Text style={{color:'#E3242B',fontSize:17,fontWeight:600}}>
                        Forget Password?
                    </Text>


                </TouchableOpacity>
            </View>

            </View>

            <View style={{justifyContent:'center',alignItems:'center',top: hp('50%')}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Herosection")}
           
            style={{height:hp('6.4%'),
            width:wp ('70%'),
            backgroundColor:'#E3242B',
            borderRadius:36}} 
        >
          <Text style={{color:'#fff',textAlign:'center',top:hp ('1.7%'),fontSize:18,fontWeight:500}}>Sign In</Text>

        </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> navigation.navigate("SignUp")}
                style={{top:hp('2.2%')}}>
                    <Text style={{fontSize:18,fontWeight:400}}>
                       Don't have an account? <Text style={{color:'#E3242B'}}> Sign Up </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}