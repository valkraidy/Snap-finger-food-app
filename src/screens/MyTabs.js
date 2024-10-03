import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Meals from './Meals';
import Cart from './Cart';
import Profile from './Profile';
import Badge from './Badge';
import { useCart } from './CartContext';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const { cartItems } = useCart();

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
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
          }
          return (
            <View>
              <Ionicons name={iconName} size={size} color={color} />
              {route.name === 'Cart' && <Badge count={cartItems.length} />}
            </View>
          );
        },
        tabBarActiveTintColor: '#E3242B',
        tabBarInactiveTintColor: '#000',
        tabBarHideOnKeyboard: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarHideOnKeyboard: false }}/>
      <Tab.Screen name="Meals" component={Meals} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}
      
       />
    </Tab.Navigator>
  );
}
