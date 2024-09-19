import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
 import { Account, Client, ID } from 'appwrite';



export default function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');


    //  const handleSignUp = async () => {
    //     try {
    //         const response = await account.create(ID.unique(), phoneNumber, 'temporaryPassword', username); 
    //         console.log('User signed up:', response);

    //         // Send OTP
    //         const otp = await sendOTP(phoneNumber);
    //         setGeneratedOtp(otp);
    //         navigation.navigate('VerifyOTP', { phoneNumber, generatedOtp: otp }); // Navigate to OTP verification screen

    //     } catch (error) {
    //         console.error('Sign-up failed:', error);
    //         Alert.alert('Error', 'Sign-up failed. Please try again.');
    //     }
    // };
    


    return (
        <View style={{ flex: 1 }}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Welcome")}
                    style={{ top: hp('6%'), left: 15 }}
                >
                    <AntDesign name="arrowleft" size={26} color="black" />
                </TouchableOpacity>

                <View style={{ top: hp('7%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'serif', fontSize: 24, fontWeight: '700' }}>
                        Getting Started
                    </Text>
                    <Text style={{ fontFamily: 'serif', fontSize: 20, fontWeight: '400', color: 'black' }}>
                        Let's create your account first.
                    </Text>
                </View>

                <View style={{ top: hp('20%'), alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontWeight: '600', marginTop: 15, fontSize: 17, fontFamily: 'serif' }}>
                         Phone Number
                        </Text>
                        <View style={{ position: 'relative', marginTop: 10 }}>
                            <AntDesign name="user" size={24} color="#E3242B"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                    top: hp('1%'),
                                    width: 25,
                                }}
                            />
                            <TextInput
                                style={{
                                    borderColor: '#E3242B',
                                    borderWidth: 1,
                                    height: hp('5%'),
                                    width: wp('80%'),
                                    borderRadius: 10,
                                    paddingLeft: 50,
                                    fontSize: 17
                                }}
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                placeholder=""
                               
                                 keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ paddingBottom: '2%', fontWeight: '600', fontSize: 17, fontFamily: 'serif' }}>
                          Username
                        </Text>
                        <View>
                            <Ionicons name="mail-outline" size={24} color="#E3242B"
                                style={{
                                    position: 'absolute',
                                    left: 10,
                                    top: hp('1%'),
                                    width: 25,
                                }}
                            />
                            <TextInput
                                style={{
                                  
                                    color: 'black',
                                    borderColor: '#E3242B',
                                    borderWidth: 1,
                                    height: hp('5%'),
                                    width: wp('80%'),
                                    borderRadius: 10,
                                    paddingLeft: 50,
                                    fontSize: 17,  
                                }}
                                value={username}
                                onChangeText={setUsername}
                                 keyboardType='default'
                                
                            />
                        </View>
                    </View>

                  
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', top: hp('38%') }}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("VerifyOTP")}
                        style={{
                            height: hp('5%'),
                            width: wp('80%'),
                            backgroundColor: '#E3242B',
                            borderRadius: 10
                        }}
                    >
                        <Text style={{
                            fontFamily: 'serif',
                            color: '#fff',
                            textAlign: 'center',
                            top: hp('1%'),
                            fontSize: 18,
                            fontWeight: '500'
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignIn")}
                        style={{ top: hp('2.5%') }}
                    >
                        <Text style={{ fontFamily: 'serif', fontSize: 18, fontWeight: '400' }}>
                            Already have an account? <Text style={{ color: '#E3242B' }}>Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style='auto' />
        </View>
    );
}
