import { router } from 'expo-router';
import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'


function SplashPage() {
    
    const OnPress = () => {
        router.replace('(tabs)') ;
    }

    return (
        <ImageBackground
            source={require('@/assets/images/NewSplash.png')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
        >
            <View style={{ marginTop: 100, flex: 2 }}>
                <Image
                    source={require('@/assets/images/Aspen.png')}
                />
            </View>
            <View style={{ marginBottom: 50, flex: 1, justifyContent: 'flex-end', width: '100%' }}>
                <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
                    <Text style={{ fontSize: 24, color: 'white', marginBottom: -5 }}>Plan Your</Text>
                    <Text style={{ fontSize: 40, color: 'white', marginBottom: -5 }}>Luxurious</Text>
                    <Text style={{ fontSize: 40, color: 'white', marginBottom: 0 }}>Vacation</Text>
                </View>

                <View style={{ paddingHorizontal: 10, width: '100%' }}>
                    <TouchableOpacity onPress={OnPress} style={{ backgroundColor: '#196EEE', height: 52, justifyContent: 'center', alignItems: 'center', borderRadius: 23 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Explore</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SplashPage