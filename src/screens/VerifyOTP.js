import { View, Text,TouchableOpacity,Image} from 'react-native'
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
            onPress={()=>navigation.navigate("SignUp")}
            style={{top:hp('8%')}}>

            <AntDesign name="arrowleft" size={26} color="black" /> 
            </TouchableOpacity>

        

        <View style={{top:hp('10%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight:700}}> 
              Verify OTP
            </Text>

            <Text style={{fontSize:18,fontWeight:400,color:'black',textAlign:'center'}}>
            Your Pass Code Has Been Sent To
             +233241482993
            </Text>

        </View>

        <View style={{top:hp('20%'),alignItems:'center',flexDirection:'row',justifyContent:'center',gap:20}}>
   
            <View>
               
                <TextInput
                    style={{height: hp('6%'),
                    color:'black',
                    borderColor: '#E3242B', 
                    borderWidth: 1,
                    height:hp('8%'),
                    width: wp('12%'),
                    borderRadius:30,
                    paddingLeft:20
                    }}
  
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType='phone-pad'
                />
            </View>


            <View>
               
               <TextInput
                    style={{height: hp('6%'),
                    color:'black',
                    borderColor: '#E3242B', 
                    borderWidth: 1,
                    height:hp('8%'),
                    width: wp('12%'),
                    borderRadius:30,
                    paddingLeft:20
                    
                   
                    }}
 
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType='phone-pad'
                    placeholder=''
                />
            </View>
               
            
            <View style={{position:'relative',keyboard:'default'}}>
              
                <TextInput
                    style={{ color:'#A7AEC1',
                    borderColor: '#E3242B',
                    borderWidth: 1,
                    height:hp('8%'),
                    width: wp('12%'),
                    borderRadius:30,
                    paddingLeft:20
                    
                    }}
            
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                    placeholder=""
                    keyboardType='default'
                />



            </View>
               
        

            <View>
              
                <TextInput
                    style={{ height: 40,
                    color:'#A7AEC1',
                    borderColor: '#E3242B',
                    borderWidth: 1,
                    height:hp('8%'),
                    width: wp('12%'),
                    borderRadius:30,
                    paddingLeft:20
                  
                         }}
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                  
                    keyboardType='ascii-capable'
                />
               
            </View>

           
        </View>

        <View style={{flex:1,fontSize:24,top:hp('25%',)}}>
            <Text style={{textAlign:'center',fontSize:17}}>
                Didn't recieve any code? <Text style={{color:'#E3242B'}}> Resend (2s) </Text>
            </Text>
        </View>

       

            <View style={{justifyContent:'center',alignItems:'center',top: hp('55%')}}>
                <TouchableOpacity
                    onPress = {()=>navigation.navigate("Herosection")}

                    style={{height:hp('6.4%'),
                    width:wp ('70%'),
                    backgroundColor:'#E3242B',
                    borderRadius:36}} 
                >
                      <Text style={{color:'#fff',textAlign:'center',top:hp ('2%'),fontSize:18,fontWeight:500}}>Get Started</Text>

                </TouchableOpacity>

               
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}