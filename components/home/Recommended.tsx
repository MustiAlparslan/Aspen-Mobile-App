import React from 'react'
import CommintyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../Title';
import Scroll from '../Scroll';

export default function Recommended() {
    return (
        <View style={{ marginTop: 22, marginBottom: 70, flex: 1 }}>
            <Title text='Recommended' size={21} weight='bold' style={{ padding: 8 }} />

            <Scroll style={{ paddingLeft: 5, paddingVertical: 5 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
            </Scroll>
        </View>
    )
}


const RecommendedCard = () => {
    return (
        <View style={styles.CardStyle}>
            <Image source={require('@/assets/images/Recommended1.png')} style={{ width: 180, height: 100, backgroundColor: 'yellow', borderRadius: 14 }} />
            <Text style={{ fontSize: 15, fontWeight: 'medium', marginTop: 5 }}>Explore Aspen</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <CommintyIcon name='finance' size={21} color={'#84ABE4'} />
                <Text style={{ fontSize: 12, color: '#3A544F' }}>Hot Deal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CardStyle: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: 20,
        width: 200,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 5,              // Android
        shadowColor: '#030002',    // Android, iOS & Web
        shadowOpacity: 0.100,       // iOS & Web
        shadowRadius: 20,
        marginRight: 10
    }
})