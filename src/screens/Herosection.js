import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Dimensions, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';

const images = [
    'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg'
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Herosection() {
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
        <ScrollView>
            <View style={{ flex: 1, top: hp('2.5%'), paddingLeft: 20, paddingRight: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: wp('5%'), fontWeight: '600' }}>Hello Kraidy</Text>
                    <TouchableOpacity>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ color: '#E3242B' }}>
                    <Text style={{ textAlign: 'left', fontSize: wp('7%'), fontWeight: '800' }}>
                        Choose Your <Text style={{ color: '#E3242B' }}>Food Today</Text>
                    </Text>
                </View>

                <SafeAreaView style={{ flex: 1, top: hp('3%') }}>
                    <View style={{ width: WIDTH, height: hp('28%') }}>
                        <ScrollView
                            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            style={{}}
                        >
                            {images.map((e, index) => (
                                <Image
                                    key={index}
                                    resizeMethod="contain"
                                    source={{ uri: e }}
                                    style={{ width: wp('80%'), borderRadius: 40, height: hp('22%') }}
                                />
                            ))}
                        </ScrollView>
                        <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row', alignSelf: 'center' }}>
                            {images.map((e, index) => (
                                <Text key={index} style={imgActive === index ? styles.dotActive : styles.dot}>
                                    ●
                                </Text>
                            ))}
                        </View>
                    </View>
                </SafeAreaView>

             

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', top: hp('9%') }}>
                   
                     < TouchableOpacity>
                    <View>
                        <Image
                            style={{ borderRadius: 100, height: 80, width: 80 }}
                            source={require('../images/jol.jpg')}
                        />
                    </View>
                    </TouchableOpacity>

                     < TouchableOpacity>

                    <View>
                        <Image
                            style={{ borderRadius: 100, height: 80, width: 80 }}
                            source={require('../images/smoothie.jpg')}
                        />
                    </View>
                       </TouchableOpacity>

                    < TouchableOpacity>
                    <View>
                        <Image
                            style={{ borderRadius: 100, height: 80, width: 80 }}
                            source={require('../images/pizza.jpg')}
                        />
                    </View>
                       </TouchableOpacity>
                     < TouchableOpacity>
                    <View>
                        <Image
                            style={{ borderRadius: 100, height: 80, width: 80 }}
                            source={require('../images/c.jpg')}
                        />
                    </View>
                       </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    input: {
        color: '#505050',
        borderColor: '#E3242B',
        borderWidth: 1,
        height: hp('5%'),
        width: wp('90%'),
        borderRadius: 15,
        paddingLeft: 5,
        fontSize: 20,
        justifyContent: 'center',
        marginTop: hp('2%'),
        backgroundColor: 'white',
    },
    dotActive: {
        margin: 3,
        color: '#E3242B',
    },
    dot: {
        margin: 3,
        color: '#ffffff',
    },
});
