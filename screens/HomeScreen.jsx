import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import Category from '../components/Category';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <SafeAreaView>
            <View style={page.container}>
                <Image
                    source={require("../assets/delivery.jpg")}

                    style={page.image}
                />

                <View style={page.textContainer}>
                    <Text className={page.textContainer__text1}>
                        Delievery Now
                    </Text>
                    <Text style={page.textContainer__text2}>
                        Current location
                        <Entypo name="chevron-down" size={24} color="#00CCBB" />
                    </Text>
                </View>

                <AntDesign name="user" size={24} color="#00CCBB" />
            </View>



            {/* Search  */}
            <View style={page.search}>
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                    placeholder='Resturant and dishes'
                    keyboardType='default'
                    style={page.textInput}
                />

            </View>


            {/* main Contect  */}
            <ScrollView style={page.main} contentContainerStyle={{


                paddingBottom: 100
            }}>
                <View>
                    <Category />
                </View>

                <FeaturedRow id="123" title="Featured" description="this very expensive and tasty" featuredCtegory="featured" />
                <FeaturedRow id="123" title="TasteFood" description="this very expensive and tasty" featuredCtegory="featured" />

                <FeaturedRow id="123" title="Discount" description="this very expensive and tasty" featuredCtegory="featured" />



            </ScrollView>

        </SafeAreaView>

    )
}


const page = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 2
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 100
    },
    textContainer: {
        flex: 1,
    },
    textContainer__text1: {
        fontWeight: 700,
        color: "#C0C0C0",
        fontSize: 8
    },
    textContainer__text2: {
        fontWeight: 700,
        fontSize: 20
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        borderRadius: "20px",
        alignItems: 'center',

        backgroundColor: "#DCDCDC"
    },
    textInput: {
        width: "100vw",
        borderRadius: "20px",
        border: '0 solid black',
        padding: 8,
        margin: 5,
    },
    main: {
        paddingTop: 10,

    }
});
export default HomeScreen
