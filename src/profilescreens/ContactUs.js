import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Profile({navigation}) {
  return (
    <>
    <View style={{ top:hp('2%'),padding:20}}>
        <TouchableOpacity
                   onPress={()=>navigation.navigate("Profile")}
                    style={{ left: 1}}
                >
                   <Text> <AntDesign name="arrowleft" size={26} color="black" /></Text>
        </TouchableOpacity>

      



{/* LIST */}
        <View style={{ marginTop:hp('0%'),}}   >
              
           <TouchableOpacity>
                <View 
                 style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{}}>
                            <Text style={{top:hp('2.3%')}}>
                            </Text>
                            <Text style={{ 
                                fontSize:hp('2%'),
                                fontWeight:700
                                }}>
                                    Talk To Us Today...
                            </Text>
                               
                    </View>  
                </View>
           </TouchableOpacity>
        </View>


        <View style={{ marginTop:hp('1%'),}}   >
                    
           <TouchableOpacity>
                 <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                                <Text style={{top:hp('3.4%')}}>
                                         <Feather name="phone-call" size={22} color="#E3242B" />
                                                 
                                </Text>
                                <Text style={{ 
                                fontSize:hp('1.1%'),
                                fontWeight:400,
                                left:wp('8%'),
                                color:'gray'
                                }}>CALL US</Text>
                                 <Text style={{ left:wp('8%'), fontSize:hp('1.7%'),}}>(+233)24-124-2993</Text>
                        </View>

                    
            </View>
           </TouchableOpacity>

            <View style={{
                borderWidth:0.3,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),

             }}>
            
            </View>
        </View>

       

        <View style={{ marginTop:hp('0%'),}}> 
           <TouchableOpacity>
                 <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                                <Text style={{top:hp('3.4%')}}>
                                        <Fontisto name="email" size={22} color="#E3242B" />
                                                 
                                </Text>
                                <Text style={{ 
                                fontSize:hp('1.1%'),
                                fontWeight:400,
                                left:wp('8%'),
                                color:'gray'
                                }}>EMAIL US</Text>
                                 <Text style={{ left:wp('8%'), fontSize:hp('1.7%'),}}>www.snapfinger@gmail.com</Text>
                        </View>

                    
            </View>
           </TouchableOpacity>


            <View style={{
                borderWidth:0.3,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('0%'),}}   >
              
           <TouchableOpacity>
                 <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                                <Text style={{top:hp('3.4%')}}>
                                       <MaterialCommunityIcons name="web" size={22} color="#E3242B" />
                                                 
                                </Text>
                                <Text style={{ 
                                fontSize:hp('1.1%'),
                                fontWeight:400,
                                left:wp('8%'),
                                color:'gray'
                                }}>OUR WEBSITE</Text>
                                 <Text style={{ left:wp('8%'), fontSize:hp('1.7%'),}}>https://www.snapfinger.com</Text>
                        </View>

                    
            </View>
           </TouchableOpacity>
            <View style={{
                borderWidth:0.3,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

          {/* <View style={{ marginTop:hp('0%'),}}   >
              
                <TouchableOpacity>
                    <View 
                        style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View>
                                    <Text style={{top:hp('2.3%')}}>
                                        <Ionicons name="location-outline" size={24} color="#E3242B" />
                                    </Text>

                                    <Text style={{ 
                                    fontSize:hp('1.6%'),
                                    fontWeight:400,
                                    left:wp('7%')
                                    }}>Locate Us</Text>
                            </View>

                            <Fontisto name="angle-right" size={10} color="gray" 
                        style={{top:20}}
                        />
                    </View>
                </TouchableOpacity>

            <View style={{
                borderWidth:0.3,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            </View>
        </View>


        <TouchableOpacity>
            <View style={{ marginTop:hp('0%'),}}   >
                
                <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                            <Text style={{top:hp('2.3%')}}>
                                 <Octicons name="versions" size={20} color="#E3242B" />
                            </Text>

                           <Text style={{ 
                            fontSize:hp('1.6%'),
                            fontWeight:400,
                            left:wp('7%')
                            }}>Version</Text>
                    
                    </View>
                    <Text style={{color:'',top:hp('2.5%')}}>2.0.1</Text>
                </View>
                <View style={{
                    borderWidth:0.3,
                    borderColor:'#D3D3D3',
                    marginTop:hp('2%'),
                }}>
                
                </View>
            </View>
         </TouchableOpacity>
          */}





    </View>

      </>
  )
}
