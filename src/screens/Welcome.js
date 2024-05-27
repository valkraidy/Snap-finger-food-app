import { Text ,Image,View,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'




import React from 'react'
export default function Welcome({navigation}) {
  return (
    <View style={{flex:1}}>

        <View style={{flex:1,alignItems:'center',justifyContent:'center',
        // top:hp('25%')
        }}>
          <Image
            source ={require('../images/come.png')}
             //style={{height:hp('11%'),width: wp('20%')}}
             style={{top:hp('10%'),}}
          /> 

        </View>

        <View style={{alignItems:'center',
        top:hp('-23%')
        }}>

          <Text style={{fontSize: hp('3.5%'),fontWeight:700,}}> Welcome to Snap finger
          </Text>

          <Text style={{fontWeight:400,fontSize:hp('2.1%'),textAlign:'center',color:'black'}}> 
          If you are new here create account
      .</Text>

        </View> 

       

        {/* TouchableOpacity */}

        <View style={{justifyContent:'center',alignItems:'center',
         top: hp('-10%'),flexDirection:'row',gap:40
        }}>

        <TouchableOpacity 
            onPress={()=>navigation.navigate("SignUp")}  
            style={{height:hp('6%'),width:wp ('30%'),backgroundColor:'#E3242B',borderRadius:46}} 
        >
            <Text style={{color:'#fff',textAlign:'center',top:hp ('1.4%'),fontSize:hp('2.3%'),fontWeight:700}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=>navigation.navigate("SignIn")}  
            style={{height:hp('6%'),width:wp ('30%'),backgroundColor:'#FAFAFA',borderRadius:46,borderWidth:1,borderColor:'#E3242B'}} 
        >
            <Text style={{color:'#E3242B',textAlign:'center',top:hp ('1.2%'),fontSize:hp('2.3%'),fontWeight:700}}>Login</Text>
        </TouchableOpacity>



        {/* <TouchableOpacity
          onPress={() =>navigation.navigate("SignIn")} 
        >
        
          <Text style={{color:'#E3242B',textAlign:'center',fontSize:hp('2.5%'),fontWeight:700,top:hp('2%')}}>Login</Text>
        </TouchableOpacity> */}
        </View>
      
      <StatusBar style='auto'/>
    
    </View>
  )
}