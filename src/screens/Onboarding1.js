import { View, Text,Image ,TouchableOpacity,Button} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'


//Costume Skip,done and Next buttons
const Skip = ({...props}) => (
  <TouchableOpacity
     {...props} 
         
            style={{height:hp('5%'),width:wp ('30%'),
            // backgroundColor:'#FAFAFA',
            borderRadius:5,
            // borderWidth:1,borderColor:'#E3242B'
          }} 
  >
            <Text style={{color:'#E3242B',
            textAlign:'center',
            top:hp ('0.5%'),fontSize:hp('2.6%'),fontWeight:900}}>Skip</Text>
  </TouchableOpacity>



)

const Next = ({...props}) => (

               <TouchableOpacity
               {...props}
                 style={{
                 
                   height: hp('6.8%'),
                     width: wp('20%'),
                   backgroundColor: '#E3242B',
                      borderRadius: 1,
                      alignContent:'center' }}
              >
                
                <Text style={{ color: '#fff',
                 textAlign: 'center', 
                 top: hp('1.4%'), fontSize: hp('2.4%'), fontWeight: 900}}>Next </Text>
              </TouchableOpacity>
)

const Done = ({...props}) => (
 
   <TouchableOpacity
               {...props}
                 style={{
                 
                   height: hp('6.8%'),
                     width: wp('20%'),
                   backgroundColor: '#E3242B',
                      borderRadius: 1,
                      alignContent:'center' }}
              >
                
                <Text style={{ color: '#fff',
                 textAlign: 'center', 
                 top: hp('1.4%'), fontSize: hp('2.4%'), fontWeight: 900 }}>Done </Text>
              </TouchableOpacity>
)


export default function Onboarding1({navigation}) {
  return (
    <Onboarding
     onSkip={()=>navigation.navigate("Welcome")}
     onDone={()=>navigation.navigate("Welcome")}
     SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      style={{fontFamily:'serif'}}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../images/a1.jpg')} 
   style={{width:wp('80%'),height:hp('33%')}}
      />,
      title: 'Hungry for Convinience?',
      titleStyles:{fontSize:40,fontWeight:800},
      subtitle: 'Order now for speedy delivery.',
      subTitleStyles:{fontSize:20,color:'#000',fontWeight:400},
    },


    {
      backgroundColor: '#fff',
     image: <Image source={require('../images/a22.jpg')} 
   style={{width:wp('80%'),height:hp('34%')}}
      />,
      title: 'Bet You are Hungry,rigth?',
      titleStyles:{fontSize:40,fontWeight:800},
      subtitle: 'Craving satisfied ,we deliver fast.',
      subTitleStyles:{fontSize:20,fontWeight:400}
    },


    {
      backgroundColor: '#fff',
       image: <Image source={require('../images/a3.jpg')} 
   style={{width:wp('75%'),height:hp('34%')}}
      />,
      title: <Text style={{fontSize:40,fontWeight:800}}>Place Order now</Text>,
       titleStyles:{fontSize:40,fontWeight:800},
      subtitle: 'Get started with easy ordering .',
         subTitleStyles:{fontSize:20,fontWeight:400}
    },
    
  ]}
/>
  )
}