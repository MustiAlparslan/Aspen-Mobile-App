import React from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Title from '../Title';
import Scroll from '../Scroll';

function Popular() {
    return (
        <View style={{ marginTop: 22, }}>
            <HeaderCard />

            <Scroll style={{ marginTop: 12, paddingLeft: 5, paddingVertical: 5 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                <PopularCard />
            </Scroll>
        </View>
    )
}


const HeaderCard = () => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 8, justifyContent: 'space-between', alignItems: 'center' }}>
            <Title text='Popular' size={21} weight='bold' />
            <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#196EEE', marginRight: 5 }}>See All</Text>
        </View>
    )
}

const PopularCard = () => {
    return (
        <View style={{ marginRight: 12, }} >
            <ImageBackground source={require('@/assets/images/Popular1.png')} style={{ width: 190, height: 240, flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 4, justifyContent: 'space-between', }} resizeMode="contain" >
                <View style={{ height: 65, paddingHorizontal: 12 }}>
                    <View style={{ alignItems: 'center', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 4, backgroundColor: '#4D5652' }}>
                        <Text numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{ color: 'white', fontWeight: '400', minWidth: 30 }}
                        >Alley Palace</Text>
                    </View>
                    <View style={{ width: 70, marginTop: 4, paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center', borderRadius: 25, padding: 4, backgroundColor: '#4D5652', flexDirection: 'row', gap: 3 }}>
                        <Icon name="star" size={15} color="gold" />
                        <Text style={{ color: 'white', fontSize: 12 }}>3.1</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 10, marginEnd: 12 }}>
                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="heart" size={18} color="red" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Popular