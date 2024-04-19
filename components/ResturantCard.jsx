import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ResturantCard = ({
    id,
    imageUrl,
    title,
    Short_description,
    address,
    dishes,
    long,
    lat,
    genre,
    rating

}) => {
    return (
        <TouchableOpacity style={resturant.container}>
            <View>

           
            <Image
                source={require('../assets/image.jpg')}
                style={resturant.image}
            />

            <View style={resturant.title}>
                <Text style={resturant.text__1}>
                    {title}
                </Text>
                <View style={resturant.rating}>
                    <AntDesign name="star" size={22} color="#00CCBB" />
                    <Text style={resturant.text__2}>
                        <Text style={resturant.text__3} >{rating}  .{genre}</Text>
                    </Text>
                </View>

                <View style={resturant.location}>
                    <Entypo name="location-pin" size={23} color="gray" />
                    <Text style={resturant.text__4} >Nearby. {address}</Text>
                </View>

            </View>
            </View>
        </TouchableOpacity>
    )
}

const resturant = StyleSheet.create({
    container:{
        display: 'flex',
        paddingRight: 8
    },
    image:{
        width: "150px",
        height: "150px",
        borderRadius: 8,

    },
    text__1:{
        fontWeight: 700,
        fontSize: 20,
        marginVertical: 3
    },
    rating:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        marginVertical: 3

    },
    text__3:{
        fontWeight: 500,
        marginRight: 15,
        fontSize: 16
    },
    location:{
        display: 'flex',
        flexDirection: 'row',

    },
    text__4:{
        color: 'gray',
        fontSize: 16
    }
})


export default ResturantCard