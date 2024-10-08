import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

export default function Onboarding2({ navigation }) {
  return (
    <View style={{ flex: 1 ,fontFamily:'serif'}}>
      <ImageBackground
        source={require('../images/onboard.jpg')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          justifyContent: 'center',
          height: '100%',
          width:wp('100%'),
          position:'absolute'
       
    
        }}
      >
         </ImageBackground>
        <View style={{backgroundColor:'black',height:hp('100%'),opacity:0.6}}>
        </View>
         <View style={{position:'absolute',left: 0, right: 0, alignItems: "center"}}>
        <View style={{ flex: 1, alignItems: 'center', top: hp('34%'),textAlign: 'center' }}>
         
          <Text style={{fontFamily:'serif', fontSize: hp('4.1%'), fontWeight: '700', top: hp('31%'), color: 'white' ,justifyContent:'center',alignItems:'center',textAlign: 'center'}}>Thinking of{'\n'} what to eat?</Text>
          <Text style={{fontFamily:'serif', fontWeight: '500', fontSize: hp('2.5%'), top: hp('34%'), textAlign: 'center', color: '#fff' }}>  Get started with easy ordering!</Text>
         


          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, gap: 6,top:hp('34%') }}>
          <FontAwesome name="circle" size={8} color="#808080" />
          <FontAwesome name="circle" size={12} color="#E3242B"
          style={{top:'-0.4%'}} 
          />
          <FontAwesome name="circle" size={8} color="#808080" />
        </View>
        </View>

      

        {/* TouchableOpacity */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',top:hp('68%') }}>
          <TouchableOpacity
            style={{ height: hp('5%'), width: wp('80%'), backgroundColor: '#E3242B', borderRadius: 10 ,}}
            onPress={() => navigation.navigate("Onboarding3")}
          >
            <Text style={{fontFamily:'serif', color: '#fff', textAlign: 'center', top: hp('0.6%'), fontSize: hp('2.5%'), fontWeight: '900' }}>Next</Text>
          </TouchableOpacity>

          

          <TouchableOpacity 
          onPress={() => navigation.navigate("Welcome")}
          style={{ height: hp('5%'), width: wp('80%'), borderColor: '#E3242B', borderRadius: 10, top: hp('2%'),borderWidth:1}}
          
          >
            <Text style={{fontFamily:'serif', color: '#fff', textAlign: 'center', top: hp('0.2%'), fontSize: hp('2.5%'), fontWeight: '900' }}>Skip</Text>
          </TouchableOpacity>
        </View>
        </View>
        
       
     
      <StatusBar style='auto' />
    </View>
  );
}
