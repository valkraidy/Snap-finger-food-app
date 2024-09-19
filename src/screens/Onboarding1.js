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
        <Text style={{fontSize:20,}}>Skip</Text>
    </TouchableOpacity>
)

const Next = ({...props}) => (
    <TouchableOpacity
   {...props}
    style={{color:'#000'}}
    >
        <Text style={{fontSize:20,}}>Next</Text>
    </TouchableOpacity>
)

const Done = ({...props}) => (
    <TouchableOpacity
   {...props}
    style={{color:'#000'}}
    >
        <Text style={{fontSize:20,}}>Done</Text>
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
      backgroundColor: '#fff',
      image: <Image source={require('../images/Noodles.jpeg')} 
   
      />,
      title: 'Onboarding1',
      titleStyles:{color:'red'},
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../images/onboard.jpg')} />,
      title: 'Onboarding2',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../images/on3.png')} />,
      title: 'Onboarding3',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
  ]}
/>
  )
}