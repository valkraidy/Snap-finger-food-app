import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



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
            <Text style={{fontFamily:'serif',fontSize:24,fontWeight:700}}> 
              Getting Started
            </Text>

            <Text style={{fontFamily:'serif',fontSize:20,fontWeight:400,color:'black'}}>
            Let's create your account first.
             
            </Text>

            


            </View>

            

            <View style={{top: hp('20%'),alignItems:'center'}}>


               <View>
                <Text style={{fontWeight:600,marginTop:15,fontSize:17,fontFamily:'serif'}}>
                    Username
                </Text>
                <View style={{position:'relative',keyboard:'default',marginTop:10,fontSize:17}}>

                  <AntDesign name="user" size={24} color="#E3242B" 
                   
                    style={{
                  position:'absolute',
                  left:10,
                   top:hp('1%'),
                  width: 25,
                }}
                  
                  />
              
                    <TextInput
            style={{
             borderColor: '#E3242B',
              borderWidth: 1,
              height:hp('5.5%'),
              width: wp('80%'),
              borderRadius:35,
              paddingLeft: 50,
              fontSize:20
              
             }}
      
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            placeholder=""
            keyboardType='default'
          />

            </View>
               
            </View>



            <View style={{marginTop:10}}>
                <Text style={{paddingBottom:('4%'),fontWeight:600,fontSize:17,fontFamily:'serif'}}>
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
      style={{height: hp('6%'),
      color:'black',
       borderColor: '#E3242B', 
       borderWidth: 1,
       height:hp('5.5%'),
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


           
            
          
            
            <View>

             
                <Text style={{marginTop:15,fontWeight:600,fontSize:17,fontFamily:'serif'}}>
                    Password
                </Text>

                <View style={{marginTop:10}}>

                      <AntDesign name="lock1" size={24} color="#E3242B" 

                    
                    style={{
                  position:'absolute',
                  left:10,
                  top:hp('1%'),
                  width: 20,
                  height: 30,

                }}
                  
                    
                    />


               
                <TextInput
        style={{ height: 40,
         
           borderColor: '#E3242B',
            borderWidth: 1,
            height:hp('5.5%'),
            width: wp('80%'),
            borderRadius:35,
            paddingLeft: 50,
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
            style={{height:hp('5.5%'),
            width:wp ('70%'),
            backgroundColor:'#E3242B',
            borderRadius:36}} 
        >
          <Text style={{fontFamily:'serif',color:'#fff',textAlign:'center',top:hp ('1.3%'),fontSize:18,fontWeight:500}}>Sign Up</Text>

        </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> navigation.navigate("SignIn")}
                style={{top:hp('2.5%')}}>
                    <Text style={{fontFamily:'serif',fontSize:18,fontWeight:400}}>
                       Already have an account? <Text style={{color:'#E3242B'}}> Sign In  </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}