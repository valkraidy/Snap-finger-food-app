

import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { EvilIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

export default function Foods({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchText, setSearchText] = useState('');

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const foods = [
    {
      id: 1,
      image: require('../pizzaimages/SP.jpeg'),
      title: 'Sausage Pizza',
      description: 'Pizza made with sausage and spices',
      price: 100.00
    },
    {
      id: 2,
      image: require('../pizzaimages/vpizza.jpg'),
      title: 'Vegetarian Pizza',
      description: 'This is made for vegetarians and it is purely vege.',
      price: 200.00
    },
    {
      id: 3,
      image: require('../pizzaimages/PBs.jpeg'),
      title: 'Pizza with Beef Small ',
      description: 'Tasty pizza with spicy beef and vegetables.',
      price: 80.00
    },
    {
      id: 4,
      image: require('../pizzaimages/CP.jpg'),
      title: 'Chicken Pizza',
      description: 'Nice combination of pizza made with spicy chicken .',
      price: 120.00
    },
    {
      id: 5,
      image: require('../pizzaimages/Ip.jpg'),
      title: 'Italian Pizza',
      description: 'A combination of intalian recipie',
      price: 80.00
    },
    {
      id: 6,
      image: require('../pizzaimages/eggp.jpg'),
      title: 'Egg Pizza',
      description: 'A tasty pizza which is made with egg.',
      price: 100.00
    },
    {
      id: 7,
      image: require('../pizzaimages/PBb.jpeg'),
      title: 'Pizza with Beef Big',
      description: 'Bigger size of the pizza with spicy beef',
      price: 250.00
    },
    {
      id: 8,
      image: require('../pizzaimages/mrp.jpeg'),
      title: 'Mushroom Pizza',
      description: 'The pizza main ingredient is mushroom',
      price: 150.00
    },
    {
      id: 9,
      image: require('../pizzaimages/PP.jpeg'),
      title: 'Pepperoni Pizza ',
      description: 'Nice pepperoni pizza with pepper ',
      price: 150.00
    },
    {
      id: 10,
      image: require('../pizzaimages/CP.jpg'),
      title: 'Shrimps Pizza',
      description: 'Garnished shrimp tasty pizza',
      price: 150.00
    }
  ];

  const handleFoodPress = (food) => {
    setSelectedFood(food);
    setModalVisible(true);
  };

  const filteredFoods = foods.filter(food =>
    food.title.toLowerCase().includes(searchText.toLowerCase()) ||
    food.description.toLowerCase().includes(searchText.toLowerCase())
  
  );



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ top: hp('3%'), left: 15 }}>
          <AntDesign name="arrowleft" size={26} color="black" /> 
        </TouchableOpacity>

        <View style={{ padding: 10, top: hp('2.7%'), borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
          <EvilIcons name="search" size={30} color="black"
            style={{
                  position:'absolute',
                  left:10,
                      top:hp('2%'),
                  width: 50,
                  paddingLeft: 15
                }} />
            

          <TextInput
            style={{ height: hp('5%'), borderColor: '#E3242B', borderWidth: 1, borderRadius: 35, paddingLeft: 50, flex: 1,fontSize:15 }}
            placeholder={'Find your pizza...'}
            value={searchText}
            onChangeText={setSearchText}
          />
          <Feather name="mic" size={24} color="black" />
        </View>

        {filteredFoods.map((food) => (
          <TouchableOpacity 
            key={food.id} 
            style={{ ...styles.foodContainer, marginBottom: hp('4%') }}
            onPress={() => handleFoodPress(food)}
          >
            <View>
              <Image
                source={food.image}
                style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
              />
            </View>

            <View>
              <Text style={{ fontSize: 20, fontWeight: '600', top: hp('-0.8'), left: wp('3%') }}>
                {food.title}
              </Text>

              <Text style={{ fontSize: 15, fontWeight: '300', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
                {food.description}
              </Text>

              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
                <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
                  <Text style={{ color: '#fff', fontWeight: '700' }}>GHC {food.price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              {selectedFood && (
                <>
                  <Image source={selectedFood.image} style={styles.foodImage} />
                  <Text style={styles.foodTitle}>{selectedFood.title}</Text>
                  <Text style={styles.foodDescription}>{selectedFood.description}</Text>
                  <Text style={styles.foodPrice}>GHC {selectedFood.price}</Text>

                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                     <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                      <Ionicons name="add-circle-outline" size={30} color="black"/>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  foodContainer: {
    flexDirection: 'row',
    top: hp('5%')
  },
  foodImage: {
    width: wp('100%'),
    height: hp('30%'),
    borderRadius: 20,
    top:hp('-5%')
    // marginBottom: 10
  },
  foodTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  foodDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  quantityButton: {
    padding: 10
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20
  },
  addToCartButton: {
    backgroundColor: '#E3242B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  closeButton: {
    marginTop: 10
  },
  closeButtonText: {
    fontSize: 16,
    color: '#E3242B',
    fontWeight: 'bold'
  }
});
