import React from 'react'
import { ActivityIndicator, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Title from '../Title';
import Scroll from '../Scroll';
import { useQuery } from '@tanstack/react-query';
import { GET_POPULAR } from '@/api/requests';

interface Popular {
    id: number;
    title: string;
    image: string;
    dealType: string;
    rating: number;
}


function Popular() {
    const { data, isLoading, error } = useQuery<Popular[]>({
        queryKey: ['popular'],
        queryFn: GET_POPULAR,
    });

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Veri çekilirken bir hata oluştu!</Text>;
    }
    return (
        <View style={{ marginTop: 22, }}>
            <HeaderCard />
            <Scroll style={{ marginTop: 12, paddingLeft: 5, paddingVertical: 5 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                <PopularMap data={data || []} />
            </Scroll>
        </View>
    )
}

const PopularMap: React.FC<{ data: Popular[] }> = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <PopularCard key={item.id} data={item} />
            ))}
        </>
    );
}
const PopularCard: React.FC<{ data: Popular }> = ({ data }) => {
    return (
        <View style={{ marginRight: 12, borderRadius: 25, width: 220, height: 240, }} >
            <ImageBackground imageStyle={{ borderRadius: 25 }} src={data.image} style={{ borderRadius: 25, flex: 1, height: 240, width: 220, flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 4, justifyContent: 'space-between', }} resizeMode="stretch" >
                <View style={{ height: 65, paddingHorizontal: 12 }}>
                    <View style={{ alignItems: 'center', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 5, backgroundColor: '#4D5652' }}>
                        <Text numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{ color: 'white', fontWeight: '400', minWidth: 30 }}
                        >{data.title}</Text>
                    </View>
                    <View style={{ width: 70, marginTop: 4, paddingHorizontal: 15, paddingVertical: 5, alignItems: 'center', borderRadius: 25, padding: 4, backgroundColor: '#4D5652', flexDirection: 'row', gap: 3 }}>
                        <Icon name="star" size={15} color="gold" />
                        <Text style={{ color: 'white', fontSize: 12 }}>{data?.rating}</Text>
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



const HeaderCard = () => {
    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 8, justifyContent: 'space-between', alignItems: 'center' }}>
            <Title text='Popular' size={21} weight='bold' />
            <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#196EEE', marginRight: 5 }}>See All</Text>
        </View>
    )
}

export default Popular