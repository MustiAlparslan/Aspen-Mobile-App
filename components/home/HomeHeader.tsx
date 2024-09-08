import React from 'react'
import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Title from '../Title';

export default function HomeHeader() {
    return (
        <React.Fragment >
            <View style={{ flexDirection: 'row', paddingHorizontal: 8, justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ fontSize: 15 }}>Explore</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Icon name='location' size={15} color={'#196EEE'} />
                    <Text style={{ fontSize: 15 }}>Türkiye,TR</Text>
                    <MaterialIcon name='keyboard-arrow-down' size={25} color={'#196EEE'} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 8 }}>
                <Title text='ASPEN' size={32} weight='800' />
            </View>
        </React.Fragment>
    )
}
