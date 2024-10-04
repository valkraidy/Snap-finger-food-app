import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


export default function Profile({navigation}) {
  return (

    <>
  
            <View style={{ top:hp('2%'),padding:20}}>


                <TouchableOpacity
                        onPress={()=>navigation.navigate("Profile")}
                            style={{ left: 1}}
                >
                            <AntDesign name="arrowleft" size={26} color="black" />
                </TouchableOpacity>

                <View style={{alignItems:'center', top:hp('1%') }}>
                    <Image
                        source={require( "../images/gerfin.jpg")}
                        style={{  borderRadius: 200,
                        height: 100,
                        width: 100,  }}
                    />
                </View>

                <View style={{top:hp('4%') }}>
                    <Text style={{fontSize:'3%',fontWeight:800}}>
                        Our Branches
                    </Text>
                </View>





                <View style={{ marginTop:hp('6%'),}}   >
                    <View
                        style={{
                        borderWidth:0.3,
                        borderColor:'#D3D3D3',
                        }}>
                    </View>

                </View>


                <View style={{ marginTop:hp('0%'),}}   >
                        <View 
                            style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{top:hp('2.3%')}}>                       
                                    </Text>
                                        <Text style={{ 
                                        fontSize:hp('2%'),
                                        fontWeight:700,
                                        color:"#E3242B"
                                        }}>Our Mission</Text>
                                        <Text style={{    marginTop:hp('1.5%')}}>At Snapfinger Catering Services, our mission is to deliver fast, delicious, 
                                            and high-quality meals that satisfy cravings while prioritizing convenience and
                                            exceptional customer service. We are committed to using fresh ingredients and 
                                            ensuring every customer enjoys a meal that is quick, affordable, and memorable.</Text>
                                </View>      
                        </View>
               

                    <View style={{
                        borderWidth:0.3,
                        borderColor:'#D3D3D3',
                        marginTop:hp('2%'),
                    }}>
                    </View>
                </View>

                <View style={{ marginTop:hp('0%'),}}>
                        <View 
                            style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View>
                                        <Text style={{top:hp('2.3%')}}>                
                                        </Text>
                                        <Text style={{ 
                                            fontSize:hp('2%'),
                                            fontWeight:700,
                                            color:"#E3242B"
                                    
                                        }}>Our Vision </Text>
                                        <Text style={{    marginTop:hp('1.5%')}}>
                                            Our vision is to become a leader in fast food catering, recognized 
                                            reliability, and customer-focused approach. We strive to revolutionize the fast food 
                                            industry by combining speed, quality, and personalized service, making Snapfinger Catering Services the
                                            go-to choice for individuals, families, and events across our community.
                                        </Text>
                                </View>
                        </View>
               

                    <View style={{
                        borderWidth:0.5,
                        borderColor:'#D3D3D3',
                        marginTop:hp('2%'),
                    }}>
                    
                    </View>
                </View>
            </View>

    </>
  )
}
