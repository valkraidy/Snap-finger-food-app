// import React from 'react';
// import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { StatusBar } from 'expo-status-bar';
// import { EvilIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

// export default function Foods({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
   


//       <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ top: hp('3%'), left: 15 }}>
//         <AntDesign name="arrowleft" size={26} color="black" /> 
//       </TouchableOpacity>

//       <View style={{ padding: 10, top: hp('2.7%'), borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
//         <EvilIcons name="search" size={30} color="black" />
//         <TextInput
//           style={{ height: hp('5.5%'), borderColor: '#E3242B', borderWidth: 1, borderRadius: 35, paddingLeft: 10, flex: 1 }}
//           placeholder={'Find a meal...'}
//         />
//         <Feather name="mic" size={24} color="black" />
//       </View>



//       {/* Second */}

//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/FRC.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Fried Rice & Chicken
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//          Comes with a nice taste of fried rice with a big chicken
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>50.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {/* Third */}

//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/BT.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//           Noodles
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//           Two ball of banku and a medium size of Tilapia
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>150.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {/* EIGTH */}
//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/JRC.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Jollof Rice & Chicken
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//           Tasty jollof rice with grilled chicken.
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>50.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>


//       {/* FOURTH */}

//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/AF.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Assorted Fried Rice
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//            Nice combination of vergetables ,sausage and gizzard.
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>50.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//     {/* Fifth */}

//     <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/MJRC.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Mega jollof & Chicken
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//            Jollof rice for two and two chicken
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>80.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {/* Sixth */}
//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/MAFRC.jpg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Mega Assorted Fried Rice 
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//             Assorted fried rice for two with a lot of vegetables
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>80.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {/* Seventh */}
//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/BT.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//             Banku & Tilapia
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//           Two ball of banku and a medium size of Tilapia
//           </Text>

//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>150.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       {/* Nineth */}
//       <TouchableOpacity style={{ flexDirection: 'row', top: hp('5%') }}>
//         <View>
//           <Image
//             source={require('../images/BT.jpeg')}
//             style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//           />
//         </View>

//         <View>
//           <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//            Egg Fried Rice
//           </Text>

//           <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//           Two ball of banku and a medium size of Tilapia
//           </Text>
//           <View style={{ flexDirection: 'row' }}>
//             <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//             <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//               <Text style={{ color: '#fff', fontWeight: '700' }}>150.00</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>

//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }






// import React, { useState } from 'react';
// import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView, StyleSheet } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { StatusBar } from 'expo-status-bar';
// import { EvilIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

// export default function Foods({ navigation }) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedFood, setSelectedFood] = useState(null);

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   const foods = [
//     {
//       id: 1,
//       image: require('../images/FRC.jpeg'),
//       title: 'Fried Rice & Chicken',
//       description: 'Comes with a nice taste of fried rice with a big chicken',
//       price: 50.00
//     },
//     {
//       id: 2,
//       image: require('../images/Noodles.jpeg'),
//       title: 'Noodles',
//       description: 'Two ball of banku and a medium size of Tilapia',
//       price: 40
//     },
//     {
//       id: 3,
//       image: require('../images/JRC.jpeg'),
//       title: 'Jollof Rice & Chicken',
//       description: 'Tasty jollof rice with grilled chicken.',
//       price: 50.00
//     },
//     {
//       id: 4,
//       image: require('../images/AF.jpeg'),
//       title: 'Assorted Fried Rice',
//       description: 'Nice combination of vegetables, sausage, and gizzard.',
//       price: 50.00
//     },
//     {
//       id: 5,
//       image: require('../images/MJRC.jpeg'),
//       title: 'Mega jollof & Chicken',
//       description: 'Jollof rice for two and two chicken',
//       price: 80.00
//     },
//     {
//       id: 6,
//       image: require('../images/MAFRC.jpg'),
//       title: 'Mega Assorted Fried Rice',
//       description: 'Assorted fried rice for two with a lot of vegetables',
//       price: 80.00
//     },
//     {
//       id: 7,
//       image: require('../images/BT.jpeg'),
//       title: 'Banku & Tilapia',
//       description: 'Two ball of banku and a medium size of Tilapia',
//       price: 150.00
//     },
//     {
//       id: 8,
//       image: require('../images/BT.jpeg'),
//       title: 'Egg Fried Rice',
//       description: 'Two ball of banku and a medium size of Tilapia',
//       price: 150.00
//     }
//   ];

//   const handleFoodPress = (food) => {
//     setSelectedFood(food);
//     setModalVisible(true);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
//         <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ top: hp('3%'), left: 15 }}>
//           <AntDesign name="arrowleft" size={26} color="black" /> 
//         </TouchableOpacity>

//         <View style={{ padding: 10, top: hp('2.7%'), borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
//           <EvilIcons name="search" size={30} color="black" />
//           <TextInput
//             style={{ height: hp('5.5%'), borderColor: '#E3242B', borderWidth: 1, borderRadius: 35, paddingLeft: 10, flex: 1 }}
//             placeholder={'Find a meal...'}
//           />
//           <Feather name="mic" size={24} color="black" />
//         </View>

//         {foods.map((food) => (
//           <TouchableOpacity 
//             key={food.id} 
//             style={{ ...styles.foodContainer, marginBottom: hp('2%') }}
//             onPress={() => handleFoodPress(food)}
//           >
//             <View>
//               <Image
//                 source={food.image}
//                 style={{ height: 90, width: 90, borderRadius: 20, marginLeft: wp('5%') }}
//               />
//             </View>

//             <View>
//               <Text style={{ fontSize: 20, fontWeight: '700', top: hp('-0.8'), left: wp('3%') }}>
//                 {food.title}
//               </Text>

//               <Text style={{ fontSize: 15, fontWeight: '600', width: wp('55%'), left: wp('3%'), top: hp('-1') }}>
//                 {food.description}
//               </Text>

//               <View style={{ flexDirection: 'row' }}>
//                 <Ionicons name="add-circle-outline" size={24} color="black" style={{ left: wp('3%') }} />
//                 <View style={{ height: hp('3%'), width: wp('16%'), backgroundColor: '#E3242B', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: wp('5%') }}>
//                   <Text style={{ color: '#fff', fontWeight: '700' }}>{food.price}</Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         ))}

//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalView}>
//               {selectedFood && (
//                 <>
//                   <Image source={selectedFood.image} style={styles.foodImage} />
//                   <Text style={styles.foodTitle}>{selectedFood.title}</Text>
//                   <Text style={styles.foodDescription}>{selectedFood.description}</Text>
//                   <Text style={styles.foodPrice}>${selectedFood.price}</Text>

//                   <View style={styles.quantityContainer}>
//                     <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
//                       <AntDesign name="minus" size={24} color="black" />
//                     </TouchableOpacity>
//                     <Text style={styles.quantityText}>{quantity}</Text>
//                     <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
//                       <AntDesign name="plus" size={24} color="black" />
//                     </TouchableOpacity>
//                   </View>

//                   <TouchableOpacity style={styles.addToCartButton}>
//                     <Text style={styles.addToCartText}>Add to Cart</Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//                     <Text style={styles.closeButtonText}>Close</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </View>
//           </View>
//         </Modal>

//         <StatusBar style="auto" />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0,0.5)'
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     alignItems: 'center'
//   },
//   foodContainer: {
//     flexDirection: 'row',
//     top: hp('5%')
//   },
//   foodImage: {
//     width: wp('80%'),
//     height: hp('30%'),
//     borderRadius: 20,
//     marginBottom: 10
//   },
//   foodTitle: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   foodDescription: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10
//   },
//   foodPrice: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10
//   },
//   quantityButton: {
//     padding: 10
//   },
//   quantityText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginHorizontal: 20
//   },
//   addToCartButton: {
//     backgroundColor: '#E3242B',
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginVertical: 10
//   },
//   addToCartText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   closeButton: {
//     marginTop: 10
//   },
//   closeButtonText: {
//     fontSize: 16,
//     color: '#E3242B',
//     fontWeight: 'bold'
//   }
// });






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
      image: require('../images/FRC.jpeg'),
      title: 'Fried Rice & Chicken',
      description: 'Comes with a nice taste of fried rice with a big chicken',
      price: 50.00
    },
    {
      id: 2,
      image: require('../images/Noodles.jpeg'),
      title: 'Noodles',
      description: 'Indomie instant noodles serve with spices.',
      price: 30.00
    },
    {
      id: 3,
      image: require('../images/JRC.jpeg'),
      title: 'Jollof Rice & Chicken',
      description: 'Tasty jollof rice with grilled chicken.',
      price: 50.00
    },
    {
      id: 4,
      image: require('../images/AF.jpeg'),
      title: 'Assorted Fried Rice',
      description: 'Nice combination of vegetables, sausage, and gizzard.',
      price: 50.00
    },
    {
      id: 5,
      image: require('../images/MJRC.jpeg'),
      title: 'Mega jollof & Chicken',
      description: 'Jollof rice for two and two chicken',
      price: 80.00
    },
    {
      id: 6,
      image: require('../images/MAFRC.jpg'),
      title: 'Mega Assorted Fried Rice',
      description: 'Assorted fried rice for two with a lot of vegetables',
      price: 80.00
    },
    {
      id: 7,
      image: require('../images/BT.jpeg'),
      title: 'Banku & Tilapia',
      description: 'Two ball of banku and a medium size of Tilapia',
      price: 150.00
    },
    {
      id: 8,
      image: require('../images/EFR.jpg'),
      title: 'Egg Fried Rice',
      description: 'Two ball of banku and a medium size of Tilapia',
      price: 150.00
    },
    {
      id: 9,
      image: require('../images/yamchips.jpg'),
      title: 'Yam chips with Chicken',
      description: 'Slide fried yam with fried chicken wings',
      price: 50.00
    },
    {
      id: 10,
      image: require('../images/plainrice.jpg'),
      title: 'Plain Rice with Chicken',
      description: 'Two ball of banku and a medium size of Tilapia',
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
            style={{ height: hp('5%'),width:wp('100%') ,borderColor: '#E3242B', borderWidth: 1, borderRadius: 35,
             paddingLeft: 50,
              flex: 1,fontSize:15 }}
            placeholder={'Find a meal...'}
            value={searchText}
            onChangeText={setSearchText}
          />
          <Feather name="mic" size={24} color="black" style={{   position:'relative',
                  right:30,
                  top:hp('0%'),
                  //  width: 50,
                  // paddingLeft: 15
                  }}/> 
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
                      <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                      <AntDesign name="plus" size={24} color="black" />
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
   
  },
  foodTitle: {
    fontSize: 30,
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
    fontWeight: '300',
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
