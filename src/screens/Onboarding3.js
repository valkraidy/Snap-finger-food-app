import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

export default function Onboarding2({ navigation }) {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require('../images/Onboarding1.jpg')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          justifyContent: 'center',
          height: '100%',
          position:'absolute',
          width:wp('100%')
        }}
      >
         </ImageBackground>
        <View style={{backgroundColor:'black',height:hp('100%'),opacity:0.6}}>
        </View>
         <View style={{position:'absolute',left: 0, right: 0, alignItems: "center"}}>
        <View style={{ flex: 1, alignItems: 'center', top: hp('34%'),textAlign: 'center' }}>
         
          <Text style={{ fontSize: hp('4.8%'), fontWeight: '700', top: hp('30%'), color: 'white' ,justifyContent:'center',alignItems:'center',textAlign: 'center'}}>Order now {'\n'}and dig in!!!</Text>
          <Text style={{ fontWeight: '500', fontSize: hp('2.5%'), top: hp('32%'), textAlign: 'center', color: '#fff' }}>Craving satisfied, delivered fast.</Text>
         

          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, gap: 6,top:hp('32%') }}>
          <FontAwesome name="circle" size={8} color="#808080" />
          <FontAwesome name="circle" size={8} color="#808080" />
          <FontAwesome name="circle" size={12} color="#E3242B" />
        </View>
        </View>

       

        {/* TouchableOpacity */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',top:hp('69%') }}>
          <TouchableOpacity
            style={{ height: hp('6%'), width: wp('80%'), backgroundColor: '#E3242B', borderRadius: 46 }}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={{ color: '#fff', textAlign: 'center', top: hp('1.4%'), fontSize: hp('2.5%'), fontWeight: '700' }}>Get Started</Text>
          </TouchableOpacity>

          
        </View>
        </View>
        
       
     
      <StatusBar style='auto' />
    </View>
  );
}
