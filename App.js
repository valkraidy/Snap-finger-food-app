import { TouchableOpacity  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import OnboardingOne from './src/screens/OnboardingOne'
  import OnboardingTwo from './src/screens/OnboardingTwo'
  import Onboarding3 from './src/screens/Onboarding3'
  import Welcome from './src/screens/Welcome';
  import SignUp from './src/screens/SignUp'
  import VerifyOTP from './src/screens/VerifyOTP'
  import SignIn from './src/screens/SignIn'
  import ForgetPassword from './src/screens/ForgetPassword'
  import Herosection from './src/screens/Herosection';
 
  
  
  const Stack = createNativeStackNavigator()
  export default function App() {
    return (
  
      <NavigationContainer>
      <Stack.Navigator>

        

         <Stack.Screen
        name='Herosection'
        component={Herosection}
        options={{headerShown:false}}/>
      
        <Stack.Screen
        name='OnboardingOne'
        component={OnboardingOne}
        options={{ headerShown: false }}
        />
       
      <Stack.Screen
        name='OnboardingTwo'
        component={OnboardingTwo}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='Onboarding3'
        component={Onboarding3}
        options={{ headerShown: false }}
        />
       <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
        />
      
         <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name ='VerifyOTP'
        component= {VerifyOTP}
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
        />

        {/* <Stack.Screen
        name='Herosection'
        component={Herosection}
        options={{headerShown:false}}
        
        />  */}


        <Stack.Screen
        name='ForgetPassword'
        component={ForgetPassword}
        options={{ headerShown: false }}
        />

       
     
     
       
       
       
       
      </Stack.Navigator>
      </NavigationContainer> 
     
    );
  }
  
 