import React from 'react'
import { Image } from 'react-native'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryCard = ({ title, imageUrl }) => {
    return (
        <TouchableOpacity style={categorycard.container}>
            <Image
                source={require('../assets/image.jpg')}
                style={categorycard.image}
            />
            <Text style={categorycard.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const categorycard = StyleSheet.create({
    container: {
        position: 'relative',
        marginRight: 1,

    },
    image: {
        height: "110px",
        width: "110px",
        borderRadius: 4,
        marginLeft: 8,
        backgroundColor: "#DCDCDC"
    },
    title: {
        position: 'absolute',
        bottom: 1,
        left: 11,
        color: 'white',
        fontWeight: 'bold'
    }

})
export default CategoryCard