import React from 'react'
import CommintyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import Title from '../Title';
import Scroll from '../Scroll';
import { useQuery } from '@tanstack/react-query';
import { GET_RECOMMENDS } from '@/api/requests';

interface Recommend {
    id: number;
    title: string;
    image: string;
    dealType: string;
}

export default function Recommended() {
    const { data, isLoading, error } = useQuery<Recommend[]>({
        queryKey: ['recommends'],
        queryFn: GET_RECOMMENDS,
    });

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Veri çekilirken bir hata oluştu!</Text>;
    }

    return (
        <View style={{ marginTop: 22, marginBottom: 70, flex: 1 }}>
            <Title text='Recommended' size={21} weight='bold' style={{ padding: 8 }} />
            <Scroll style={{ paddingLeft: 5, paddingVertical: 5 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <RecommendsMap data={data || []} />
            </Scroll>
        </View>
    )
}

const RecommendsMap: React.FC<{ data: Recommend[] }> = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <RecommendedCard key={item.id} data={item} />
            ))}
        </>
    );
}

const RecommendedCard: React.FC<{ data: Recommend }> = ({ data }) => {
    return (
        <View style={styles.CardStyle}>
            <Image src={data.image} style={{ width: 180, height: 100, backgroundColor: 'yellow', borderRadius: 14 }} />
            <Text style={{ fontSize: 15, fontWeight: 'medium', marginTop: 5 }}>{data?.title}</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <CommintyIcon name='finance' size={21} color={'#84ABE4'} />
                <Text style={{ fontSize: 12, color: '#3A544F' }}>En İyi Fiyat</Text>
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