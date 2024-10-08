import React from 'react'
import { ScrollView, View } from 'react-native'
import Category from '@/components/home/Category';
import HomeHeader from '@/components/home/HomeHeader';
import Popular from '@/components/home/Popular';
import Recommended from '@/components/home/Recommended';
import SearchBar from '@/components/home/SearchBar';

function HomePage() {
  return (
    <View
      style={{ flex: 1 }}
    >
      {/* Header */}
      <HomeHeader />
      <ScrollView
        style={{ flex: 1, }}
        showsHorizontalScrollIndicator={false}
      >
        {/* SEARCH BAR  */}
        <SearchBar />
        {/* CATEGORY */}
        <Category />
        {/* POPULAR */}
        <Popular />
        {/* Recommended */}
        <Recommended />
      </ScrollView>
    </View>
  )
}

export default HomePage

