import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingOne from './src/screens/OnboardingOne';
import OnboardingTwo from './src/screens/OnboardingTwo';
import Onboarding3 from './src/screens/Onboarding3';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import VerifyOTP from './src/screens/VerifyOTP';
import SignIn from './src/screens/SignIn';
import ForgetPassword from './src/screens/ForgetPassword';
import MyTabs from './src/screens/MyTabs';
import Smoothies from './src/screens/Smoothies';
import Pizzas from './src/screens/Pizzas';
import Drinks from './src/screens/Drinks';
import Foods from './src/screens/Foods';
import Modal from './src/screens/Modal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Drinks" component={Drinks} options={{ headerShown: false }} />
        <Stack.Screen name="Pizzas" component={Pizzas} options={{ headerShown: false }} />
        <Stack.Screen name="Smoothies" component={Smoothies} options={{ headerShown: false }} />
        <Stack.Screen name="Foods" component={Foods} options={{ headerShown: false }} />
        <Stack.Screen name="Modal" component={Modal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
