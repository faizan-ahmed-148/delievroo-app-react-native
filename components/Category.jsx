import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
   <ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10
   }}
   horizontal
   showsHorizontalScrollIndicator={false}
   >
    <CategoryCard  title="testing 1"  />

    <CategoryCard  title="testing2" />
    <CategoryCard  title="testing 3"  />
    <CategoryCard  title="testing 4" />
    <CategoryCard  title="testing 5"  />
   </ScrollView>
  )
}

export default Category