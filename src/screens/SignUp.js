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
         style={{top:hp('6%'),left:15}}>

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
                <Text style={{paddingBottom:('3%'),fontWeight:600,fontSize:17}}>
                    Phone Number
                </Text>

                <View>
               
                <TextInput
      style={{height: hp('6%'),
      color:'black',
       borderColor: '#E3242B', 
       borderWidth: 1,
       height:hp('6%'),
       width: wp('80%'),
       borderRadius:35,
       paddingLeft: 30 ,
       fontSize:20
   }}
  
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType='phone-pad'
      />
      </View>
               
            </View>


            <View>
                <Text style={{fontWeight:600,marginTop:15,fontSize:17}}>
                    Username
                </Text>
                <View style={{position:'relative',keyboard:'default',marginTop:10,fontSize:17}}>
              
                    <TextInput
            style={{
             borderColor: '#E3242B',
              borderWidth: 1,
              height:hp('6%'),
              width: wp('80%'),
              borderRadius:35,
              paddingLeft: 30,
              fontSize:20
              
             }}
      
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            placeholder=""
            keyboardType='default'
          />

            </View>
               
            </View>

            
          
            
            <View>

             
                <Text style={{marginTop:15,fontWeight:600,fontSize:17}}>
                    Password
                </Text>

                <View style={{marginTop:10}}>


               
                <TextInput
        style={{ height: 40,
         
           borderColor: '#E3242B',
            borderWidth: 1,
            height:hp('6%'),
            width: wp('80%'),
            borderRadius:35,
            paddingLeft: 30,
            fontSize:20
            
           

           }}

  
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder=""
        keyboardType='ascii-capable'
          secureTextEntry={true}
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
          <Text style={{color:'#fff',textAlign:'center',top:hp ('1.7%'),fontSize:18,fontWeight:500}}>Sign Up</Text>

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