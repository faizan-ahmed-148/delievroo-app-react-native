import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ResturantCard from './ResturantCard';
const FeaturedRow = ({ id, title, description }) => {
    return (
        <View style={featured.maincontainer}>
            <View style={featured.container}>
                <Text style={featured.text__1}>{title}</Text>
                <AntDesign name="arrowright" size={24} color="#00CCBB" />

            </View>
            <Text style={featured.text__2}>{description}</Text>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <ResturantCard
                    id="123"
                    imageUrl=""
                    title="sosha changi"
                    Short_description="this a best product ever"
                    address="pakistan"
                    dishes=""
                    long=""
                    lat=""
                    genre="nice"
                    rating='4.5'
                />

                <ResturantCard
                    id="123"
                    imageUrl=""
                    title="sosha changi"
                    Short_description="this a best product ever"
                    address="pakistan"
                    dishes=""
                    long=""
                    lat=""
                    genre="nice"
                    rating='4.5'
                />

                <ResturantCard
                    id="123"
                    imageUrl=""
                    title="sosha changi"
                    Short_description="this a best product ever"
                    address="pakistan"
                    dishes=""
                    long=""
                    lat=""
                    genre="nice"
                    rating='4.5'
                />


                <ResturantCard
                    id="123"
                    imageUrl=""
                    title="sosha changi"
                    Short_description="this a best product ever"
                    address="pakistan"
                    dishes=""
                    long=""
                    lat=""
                    genre="nice"
                    rating='4.5'
                />

                <ResturantCard
                    id="123"
                    imageUrl=""
                    title="sosha changi"
                    Short_description="this a best product ever"
                    address="pakistan"
                    dishes=""
                    long=""
                    lat=""
                    genre="nice"
                    rating='4.5'
                />

            </ScrollView>
        </View>


    )
}

const featured = StyleSheet.create({
    maincontainer: {
        paddingHorizontal: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,

    },
    text__1: {
        fontWeight: 700,
        fontSize: 22

    },
    text__2: {
        color: 'gray'

    }
})

export default FeaturedRow