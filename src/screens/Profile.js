import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { AntDesign } from '@expo/vector-icons';



export default function Settings({navigation}) {

  return (

    <>
  
    <View style={{ top:hp('2%'),padding:20}}>


        <TouchableOpacity
                   onPress={()=>navigation.navigate("Home")}
                    style={{ left: 1}}
                >
                    <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>

         <View style={{alignItems:'center',
       top:hp('2%')
      }}>
        <Image
        source={require('../images/profile.png')}
        style={{  borderRadius: 100,
        height: 70,
        width: 70,}}
        />
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:800}}>Val Kraidy</Text>
        <Text style={{fontSize:20,fontWeight:400}}>... ... 2993</Text>

        </View>
        
      </View>






        {/* <View style={{}}>
            <Text style={{
                 fontSize: 25,
                fontWeight:400,
                alignText:'center',
                
                }}>Profile</Text>
        </View> */}

{/* LIST */}
        <View style={{ marginTop:hp('10%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>Language</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('2%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>My Profile</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('2%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>Contact Us</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('2%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>Change Password</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

        <View style={{ marginTop:hp('2%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>About Us</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>

          <View style={{ marginTop:hp('2%'),}}   >
              
            <View 
            style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{ 
                    fontSize: 22,
                    fontWeight:400,
                    }}>Version</Text>
                    <Fontisto name="angle-right" size={18} color="gray" 
                style={{top:15}}
                />
            </View>
            <View style={{
                borderWidth:0.5,
                borderColor:'#D3D3D3',
                marginTop:hp('2%'),
             }}>
            
            </View>
        </View>








        <View >
          <TouchableOpacity 
          style={{top:hp('10%'),flexDirection:'row',gap:8}}
          onPress={()=> navigation.navigate('OnboardingOne')}
          >
             <SimpleLineIcons name="logout" size={23} color="#E3242B" />

          <Text style={{fontSize:20,}}>Log out</Text>
          </TouchableOpacity>
        </View>


     

       
     
    </View>

      </>
  )
}
