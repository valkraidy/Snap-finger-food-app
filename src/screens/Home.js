import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, Modal,Alert } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from './CartContext';
import {AntDesign, Feather} from '@expo/vector-icons';


const images = [
  'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
];





const food = [
  {
    id: 1,
    title: "Apple smoothie",
    image: require('../smoothiesimages/apple.jpg'),
    price: '12',
    description: 'A juicy hamburger with fresh lettuce and tomatoes.',
    quantity:1
  },
  {
    id: 2,
    title: "Vegetarian Pizza",
   image: require('../pizzaimages/vpizza.jpg'),
    price: '18',
    description: 'Freshly grilled salmon with a hint of lemon.',
     quantity:1
  },
  {
    id: 3,
    title: "Pizza",
    image: require('../images/FRC.jpeg'),
    price: '15',
    description: 'Delicious pizza with a variety of toppings.',
     quantity:1
  },
  {
    id: 4,
    title: "Coca cola",
      image: require('../drinksImages/cancoke.jpeg'),
    price: '10',
    description: 'Classic pasta with rich tomato sauce.'
  },
  {
    id: 5,
    title: "Assorted jollof",
     image: require('../images/AF.jpeg'),
    price: '25',
    description: 'Tender steak cooked to perfection.'
  },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Home({ navigation }) {
  const [imgActive, setImgActive] = useState(0);
  const [selectedFood, setSelectedFood] =useState(null)
   const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
   const { addToCart } = useCart();




//Handle Add to Cart

   const handleAddToCart = () => {
      addToCart({ ...selectedFood, quantity });
    setModalVisible(false);
    Alert.alert('Success🎉🎊', 'Your item has being added to cart');
  };

//Handle selected food
  const handleFoodPress =(item) =>{
    setSelectedFood(item);
    setQuantity(1);
    setModalVisible(true);
  }
    

  //increasing and decreasing
   const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);




  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>SnapFinger</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Profile')}
            >
              {/* <Image source={require('../images/profile.png')} /> */}
              {/* <FontAwesome name="user-circle-o" size={24} color="black" /> */}
              <Ionicons name="menu-outline" size={35} color="black"
              style={{top:hp('1.5%')}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
             Hey Kraidy,<Text style={styles.highlight}> Choose your food today</Text>
            
            </Text>
            
          </View>

          <View style={styles.imageSliderContainer}>
            <ScrollView
              onScroll={({ nativeEvent }) => onChange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
            >
              {images.map((e, index) => (
                <Image key={index} resizeMethod="contain" source={{ uri: e }} style={styles.sliderImage} />
              ))}
            </ScrollView>
            <View style={styles.dotContainer}>
              {images.map((e, index) => (
                <Text key={index} style={imgActive === index ? styles.dotActive : styles.dot}>
                  ●
                </Text>
              ))}
            </View>
          </View>



          {/* Categories */}

          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesText}>Categories</Text>
            <View style={styles.categoriesRow}>
              <TouchableOpacity onPress={() => navigation.navigate('Foods')}>
                <View style={styles.categoryItem}>
                  <Image style={styles.categoryImage} source={require('../images/FRC.jpeg')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
                <View style={styles.categoryItem}>
                  <Image style={styles.categoryImage} source={require('../drinksImages/cancoke.jpeg')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Pizzas')}>
                <View style={styles.categoryItem}>
                  <Image style={styles.categoryImage} source={require('../pizzaimages/CP.jpg')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Smoothies')}>
                <View style={styles.categoryItem}>
                  <Image style={styles.categoryImage} source={require('../smoothiesimages/straw.jpeg')} />
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={{top:hp('4%')}}>
          <Text style={{fontSize:20, fontSize: 22,
           color: '#000',
            fontWeight: '500',textAlign:'center'}}>Most Ordered</Text>
          </View>





          <View style={styles.itemsContainer}>
            {food.map((item, index) => (
              <TouchableOpacity key={index} 
              onPress={() => handleFoodPress(item)}
              style={styles.itemTouchable}>
                <View style={styles.itemContainer}>
                  <Image source={ item.image } style={styles.itemImage} />
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <View style={styles.itemActions}>
                      <Ionicons name="add-circle-outline" size={24} color="black" />
                      <TouchableOpacity 
                      
                      style={styles.priceTag}>
                        <Text style={styles.priceText}>GHC {item.price}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>



{/* Modal for food details */}


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

                   <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                      <FontAwesome6 name="times-circle" size={30} color="black" />
                  </TouchableOpacity>


                  <Text style={styles.foodTitle}>{selectedFood.title}</Text>
                  <Text style={styles.foodDescription}>{selectedFood.description}</Text>
                  <Text style={styles.foodPrice}>GHC{selectedFood.price}</Text>

                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                     <AntDesign name="minuscircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                    <Ionicons name="add-circle-outline" size={30} color="black"/>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.addToCartButton}  onPress={handleAddToCart}  >
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>

                 
                </>
              )}
            </View>
          </View>
        </Modal>









          <StatusBar style="auto" />
        </View>
      </ScrollView>
      {/* <MyTabs /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    height: hp('80%'),
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('2.5%'),
  },
  headerText: {
    fontSize:30,
    fontWeight: '600',
    color:"#E3242B",
    top:hp('1%')
    // fontStyle:'italic',
    

  },
  titleContainer: {
    marginTop: hp('3%'),
  },
  titleText: {
    fontSize: wp('5%'),
    fontWeight: '400',
    color: '#E3242B',
     marginTop: hp('-1.5%'),
  },
  highlight: {
    color: '#000',
  },
  imageSliderContainer: {
    width: WIDTH,
    height: hp('28%'),
    marginTop: hp('1.5%'),
    justifyContent: 'center',
   
  },
  sliderImage: {
    width: wp('80%'),
    borderRadius: 20,
    height: hp('21%'),
    marginHorizontal: wp('10%'),
    alignItems:'center',
     right:20


  },
  dotContainer: {
     position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    right:200
  },
  dotActive: {
    margin: 3,
    color: '#E3242B',
    
  },
  dot: {
    margin: 3,
    color: '#000',
  },
  categoriesContainer: {
    marginTop: hp('1%'),
    alignItems: 'center',
  },
  categoriesText: {
    fontSize: 23,
    color: '#000',
    fontWeight: '500',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  categoryItem: {
    marginHorizontal: wp('2%'),
  },
  categoryImage: {
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  itemsContainer: {
    marginTop: hp('5%'),
  },
  itemTouchable: {
    marginBottom: hp('2%'),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height: 90,
    width: 90,
    borderRadius: 20,
    marginLeft: wp('5%'),
  },
  itemTextContainer: {
    marginLeft: wp('5%'),
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  itemDescription: {
    fontSize: 16,
    fontWeight: '300',
    width: wp('55%'),
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  priceTag: {
    height: hp('3%'),
    width: wp('16%'),
    backgroundColor: '#E3242B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('5%'),
  },
  priceText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  //modal
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
    borderRadius: 20 ,
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
    marginTop: 10,
    top:hp('-34%'),
    justifyContent:'flex-end',
    left:wp('40%')
  },
  closeButtonText: {
    fontSize: 16,
    color: '#E3242B',
    fontWeight: 'bold'
  }

});



