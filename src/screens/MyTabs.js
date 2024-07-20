import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Meals from './Meals';
import Settings from './Settings';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Meals':
              iconName = focused ? 'pizza' : 'pizza-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'cart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E3242B',
        tabBarInactiveTintColor: '#000',
        tabBarHideOnKeyboard:false
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false ,tabBarHideOnKeyboard:false}} />
      <Tab.Screen name="Meals" component={Meals} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
