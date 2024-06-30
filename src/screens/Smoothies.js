import { View, Text,TextInput,SafeAreaView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Foods() {
  return (
    <SafeAreaView
    style={{flex:1,}}
    
    >

    <View>
      <Text
      style={{fontSize:20,}}
      >Eat something</Text>
    </View>


     <View style={{ padding: 10,
      
      borderRadius: 5,
    //   margin: 10,
      flexDirection: 'row',
      alignItems: 'center',}}>
        <EvilIcons name="search" size={30} color="black"  />
        <TextInput
        style={{ height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        flex: 1,}}

        placeholder={'Find a meal...'}

        />
      <Feather name="mic" size={24} color="black" />
     
    </View>





<StatusBar style='auto'/>
    </SafeAreaView>
  )
}