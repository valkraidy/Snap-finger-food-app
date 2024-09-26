import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 




export default function SignInScreen({ navigation }) {
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');

  


    return (

        
        <View style={{ flex: 1, fontFamily: 'serif' }}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={{ top: hp('6%'), left: 15 }}>
                    <AntDesign name="arrowleft" size={26} color="black" />
                </TouchableOpacity>

                <View style={{ top: hp('7%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>
                        Let's Get You Signed In
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: 'black' }}>
                        Welcome Back
                    </Text>
                </View>

                <View style={{ top: hp('20%'), alignItems: 'center' }}>
                    <View>
                        <Text style={{ paddingBottom: '3%', fontWeight: '600', fontSize: 17}}>
                       Phone Number
                        </Text>
                        <View>
                            <Ionicons name="call-outline" size={20} color="#E3242B" style={{
                                position: 'absolute', left: 10, top: hp('1.5%'), width: 25,
                            }} />
                            <TextInput
                                style={{
                                    color: 'black',
                                    borderColor: '#E3242B',
                                    borderWidth: 1,
                                    height: hp('5%'),
                                    width: wp('80%'),
                                    borderRadius: 10,
                                    paddingLeft: 50,
                                    fontSize: 17
                                }}
                                value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                keyboardType='default'
                            />
                        </View>
                    </View>

                    {/* <View>
                        <Text style={{ fontWeight: '600', top: 10, fontSize: 17, fontFamily: 'serif' }}>
                            Password
                        </Text>
                        <View style={{ top: 20 }}>
                            <AntDesign name="lock1" size={24} color="#E3242B" style={{
                                position: 'absolute', left: 10, top: hp('1%'), width: 20, height: 30,
                            }} />
                            <TextInput
                                style={{
                                    color: 'black',
                                    borderColor: '#E3242B',
                                    borderWidth: 1,
                                    height: hp('5%'),
                                    width: wp('80%'),
                                    borderRadius: 35,
                                    paddingLeft: 50,
                                    fontSize: 17
                                }}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholder=""
                                keyboardType='default'
                                secureTextEntry={true}
                            />
                        </View>
                    </View> */}


                    {/* <View>
                        <TouchableOpacity
                            style={{ right: wp('-25%'), top: hp('5%') }}
                            onPress={() => navigation.navigate("ForgetPassword")}
                        >
                            <Text style={{ color: '#E3242B', fontSize: 17, fontWeight: '600', fontFamily: 'serif' }}>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', top: hp('46%') }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MyTabs")}
                        style={{
                            height: hp('5%'),
                            width: wp('80%'),
                            backgroundColor: '#E3242B',
                            borderRadius: 10
                        }}
                    >
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            top: hp('1%'),
                            fontSize: 18,
                            fontWeight: '500',
                            
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                        style={{ top: hp('2.2%') }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: '400' }}>
                            Don't have an account? <Text style={{ color: '#E3242B' }}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style='auto' />
        </View>
    );
}
