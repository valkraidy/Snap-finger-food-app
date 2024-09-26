

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useCart } from './CartContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useCart();





  const renderItem = ({ item }) => (
  

    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>Unit Price: GHC {item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemTotalPrice}>Total Price: GHC {(item.price * item.quantity).toFixed(2)}</Text>
        
         {/* Calculate total price */}
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (

    
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ margin: 15 }}>
        <AntDesign name="arrowleft" size={26} color="black" style={{ top: hp('2%') }} />
      </TouchableOpacity>

      <View style={{ padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cart</Text>
      </View>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20 }}
        ListFooterComponent={<View style={{ height: 20 }} />}  // to add bottom padding
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  itemImage: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: '#E3242B'
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5
  },
  itemTotalPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E3242B'
  },
  removeButton: {
    padding: 10
  }
});

