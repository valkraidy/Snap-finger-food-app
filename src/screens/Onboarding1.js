import { View, Text,Image ,TouchableOpacity,Button} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'


//Costume Skip,done and Next buttons
const Skip = ({...props}) => (
    <TouchableOpacity
   {...props}
    style={{color:'#000'}}
    >
        <Text style={{fontSize:20,color:'#fff',fontWeight:'700'}}>Skip</Text>
    </TouchableOpacity>
)

const Next = ({...props}) => (
    <TouchableOpacity
   {...props}
    style={{color:'#fff'}}
    >
        <Text style={{fontSize:20,color:'#fff',fontWeight:'700'}}>Next</Text>
    </TouchableOpacity>
)

const Done = ({...props}) => (
    <TouchableOpacity
   {...props}
    style={{color:'#000'}}
    >
        <Text style={{fontSize:20,color:'#fff',fontWeight:800}}>DONE</Text>
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
  pages={[
    {
      backgroundColor: '#000',
      image: <Image source={require('../images/v2.jpg')} 
   style={{width:wp('70%'),height:hp('28%')}}
      />,
      title: 'Hungry for convenience?',
      titleStyles:{fontSize:35,fontWeight:800},
      subtitle: 'Order now for speedy delivery with no dilevery fees.',
      subTitleStyles:{fontSize:18,color:'#FFF'},
    },
    {
      backgroundColor: '#000',
     image: <Image source={require('../images/pie.jpg')} 
   style={{width:wp('72%'),height:hp('34%')}}
      />,
      title: 'Thinking of what to eat?',
      titleStyles:{fontSize:35,fontWeight:800},
      subtitle: ' Get started with easy ordering with no additional charges...',
      subTitleStyles:{fontSize:18,color:'#fff'},
    },
    {
      backgroundColor: '#000',
       image: <Image source={require('../images/d1.jpg')} 
   style={{width:wp('75%'),height:hp('34%')}}
      />,
      title: 'Order now and dig in!!!',
       titleStyles:{fontSize:35,fontWeight:800},
      subtitle: 'Craving satisfied for your favorate meal,we deliver fast.',
         subTitleStyles:{fontSize:18,color:'#fff'},
    },
    
  ]}
/>
  )
}