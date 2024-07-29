import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
// import MyTabs from './MyTabs';

const images = [
  'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
];

const data = [
  // {
  //   id: 1,
  //   title: "Hamburger",
  //   imageUrl: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
  //   price: '12.00',
  //   description: 'A juicy hamburger with fresh lettuce and tomatoes.'
  // },
  {
    id: 2,
    title: "Salmon",
    imageUrl: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    price: '18',
    description: 'Freshly grilled salmon with a hint of lemon.'
  },
  {
    id: 3,
    title: "Pizza",
    imageUrl: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg',
    price: '15',
    description: 'Delicious pizza with a variety of toppings.'
  },
  {
    id: 4,
    title: "Coca cola",
    imageUrl: 'https://cdn.pixabay.com/photo/2015/01/08/04/16/box-592366_1280.jpg',
    price: '10',
    description: 'Classic pasta with rich tomato sauce.'
  },
  {
    id: 5,
    title: "Assorted jollof",
    imageUrl: 'https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_1280.jpg',
    price: '25',
    description: 'Tender steak cooked to perfection.'
  },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Herosection({ navigation }) {
  const [imgActive, setImgActive] = useState(0);

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
            <TouchableOpacity>
              {/* <Image source={require('../images/profile.png')} /> */}
              {/* <FontAwesome name="user-circle-o" size={24} color="black" /> */}
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Choose Your <Text style={styles.highlight}>Food Today</Text>
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

          <View style={styles.itemsContainer}>
            {data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemTouchable}>
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
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
    top:hp('2%')
    // fontStyle:'italic',
    

  },
  titleContainer: {
    marginTop: hp('3%'),
  },
  titleText: {
    fontSize: wp('4.5%'),
    fontWeight: '400',
    color: '#E3242B',
  },
  highlight: {
    color: '#000',
  },
  imageSliderContainer: {
    width: WIDTH,
    height: hp('28%'),
    marginTop: hp('3%'),
    justifyContent: 'center',
    marginRight: 100,
  },
  sliderImage: {
    width: wp('80%'),
    borderRadius: 30,
    height: hp('20%'),
    marginHorizontal: wp('10%'),
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
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
    fontSize: 25,
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
});
