import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Profile({navigation}) {
  return (

    <>
  
    <View style={{ top:hp('2%'),padding:20}}>


        <TouchableOpacity
                   onPress={()=>navigation.navigate("Home")}
                    style={{ }}
                >
                    <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>

         <View style={{alignItems:'center',
       top:hp('2%')
      }}>
        <Image
        source={require('../images/Snapsplash.png')}
        style={{  borderRadius: 100,
        height: 70,
        width: 70,}}
        />
       
        
      </View>



{/* LIST */}
        <View style={{ marginTop:hp('2%'),}}   >
              
           <>
                <View 
                 style={{flexDirection:'row',justifyContent:'space-between'}}>

                    <View style={{}}>
                            <Text style={{top:hp('2.3%')}}>
                               
                            </Text>
                            <Text style={{ 
                                fontSize:hp('3%'),
                                fontWeight:700,
                                }}>
                                  Our Branches
                                </Text>
                    </View>  
                  
                </View>
           </>

            <View
                 style={{
                borderWidth:0.3,
                borderColor:'#D3D3D3',
                marginTop:hp('1%'),
                }}>
            </View>

        </View>


        <View style={{ marginTop:hp('0%'),}}   >
                    
           <TouchableOpacity
           onPress={()=>navigation.navigate('ContactUs')}
           >
                 <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                                <Text style={{top:hp('1.3%')}}>
                                       
                                                 
                                </Text>
                                <Text style={{ 
                                fontSize:hp('2%'),
                                fontWeight:700,
                                color:"#E3242B"
                              
                                }}>Takoradi-Anaji Estate</Text>
                               
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

        <View style={{ marginTop:hp('0%'),}}   >
              
            <TouchableOpacity
           
           >
                 <View 
                     style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                                <Text style={{top:hp('2.3%')}}>
                                        <MaterialCommunityIcons name="theme-light-dark" size={24} color="#E3242B" />
                                                 
                                </Text>
                                <Text style={{ 
                                fontSize:hp('1.6%'),
                                fontWeight:400,
                                left:wp('7%')
                                }}>Theme </Text>
                        </View>

                  <Entypo name="switch" size={24} color="black" style={{top:hp('2%')}}/>
                 
                
            </View>
           </TouchableOpacity>

            <View style={{
                borderWidth:0.5,
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
                    <Text style={{top:hp('2.3%')}}>
                        <FontAwesome name="language" size={20} color="#E3242B" />
                    </Text>

                     <Text style={{ 
                    fontSize:hp('1.6%'),
                    fontWeight:400,
                    left:wp('7%')
                    }}>Language</Text>
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

        <View style={{ marginTop:hp('0%'),}}   >
              
           <TouchableOpacity
           onPress={()=> navigation.navigate('AboutUs')}
           >
               <View 
                 style={{flexDirection:'row',justifyContent:'space-between'}}>

                    <View>
                        <Text style={{top:hp('2.3%')}}>
                            <Feather name="users" size={20} color="#E3242B" />                         
                        </Text>
                        <Text style={{ 
                        fontSize:hp('1.6%'),
                        fontWeight:400,
                        left:wp('7%')
                        }}>About Us</Text>
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

        


      
         







{/* logout */}

<View style={{justifyContent:'center',alignItems:'center',
         top: hp('15%'),
        gap:20
        }}>

             <TouchableOpacity 
            onPress={()=>navigation.navigate("Onboarding1")}  
            style={{height:hp('5%'),width:wp ('90%'),backgroundColor:'#E3242B',borderRadius:10}} 
        >
            <Text style={{color:'#fff',textAlign:'center',top:hp ('1%'),fontSize:hp('2.1%'),fontWeight:700}}>Log Out</Text>
        </TouchableOpacity>



</View>


       

     

       
     
    </View>

      </>
  )
}

