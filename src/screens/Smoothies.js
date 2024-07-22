
import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView, StyleSheet,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { EvilIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useCart } from './CartContext';



export default function Foods({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchText, setSearchText] = useState('');
  const {addToCart} = useCart();

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const foods = [
    {
      id: 1,
      image: require('../smoothiesimages/apple.jpg'),
      title: 'Apple smoothie',
      description: 'Rich in natural sweet apple',
      price: 50.00
    },
    {
      id: 2,
      image: require('../smoothiesimages/blue.jpg'),
      title: 'Blueberry smoothie',
      description: 'Sweet berries enrich in natural blueberries.',
      price: 40.00
    },
    {
      id: 3,
      image: require('../smoothiesimages/grapes.jpeg'),
      title: 'Grapes Smoothie',
      description: 'Tasty smoothies made with natural grapes.',
      price: 50.00
    },
    {
      id: 4,
      image: require('../smoothiesimages/pawpaw.jpg'),
      title: 'Sweet Pawpaw smoothie',
      description: 'Nice combination of pawpaw fruits.',
      price: 60.00
    },
    {
      id: 5,
      image: require('../smoothiesimages/mango.jpeg'),
      title: 'Mango Smoothie',
      description: 'Comes with natural mango mixed with banana',
      price: 50.00
    },
    {
      id: 6,
      image: require('../smoothiesimages/orange.jpg'),
      title: 'Orange Smoothie',
      description: 'Orange fruit made naturally',
      price: 70.00
    },
    {
      id: 7,
      image: require('../smoothiesimages/straw.jpeg'),
      title: 'Stawberry Smoothie',
      description: 'Made with natural strawberries, milk and yogurt ',
      price: 50.00
    },
    {
      id: 8,
      image: require('../smoothiesimages/avocdo.jpeg'),
      title: 'Avocado Smoothie',
      description: 'Made with banana, spinach, and pineapple and its peckrd with protein.',
      price: 50.00
    },
    {
      id: 9,
      image: require('../smoothiesimages/banana.jpg'),
      title: 'Banana Smoothie',
      description: 'Made with natural banana',
      price: 50.00
    },
    {
      id: 10,
      image: require('../smoothiesimages/tomato-strawberry.jpeg'),
      title: 'Tomato-strawberry smoothie',
      description: 'Mixture of natural tomatoes and strawberry',
      price: 90.00
    }
  ];



   //Handle Add to Cart

   const handleAddToCart = () => {
    addToCart(selectedFood);
    setModalVisible(false);
    Alert.alert('Success🎉🎊', 'Sweet Smoothie🍨 is added to cart');
  };

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
            placeholder={'Find your favourate smoothie...'}
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
                     <AntDesign name="minuscircleo" size={24} color="black"/>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                     <Ionicons name="add-circle-outline" size={28} color="black" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}  >
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
    marginVertical: 10,
    fontWeight: '300'
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 3
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3
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
