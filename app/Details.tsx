import Title from '@/components/Title';
import React, { useState } from 'react'
import { Alert, Image, ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Scroll from '@/components/Scroll';
import useStore from '@/store/useStore';

interface PopularDetails {
  id: number;
  title: string;
  image: string;
  dealType: string;
  rating: number;
  description: string;
  price: number;
  reviews: number;
}

function Details() {
  const { details } = useStore() as { details: PopularDetails };

  return (
    <SafeAreaView style={{ paddingHorizontal: 8, backgroundColor: 'white', flex: 1 }}>
      <Scroll showsHorizontalScrollIndicator={false}    >
        <ImageBackground source={{ uri: details?.image }}
          style={{ width: '100%', height: 340 }}
          resizeMode='cover'
          borderRadius={20}
        >
          <TouchableOpacity style={{ position: 'absolute', bottom: -20, right: 20, width: 44, height: 44, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="heart" size={30} color="#EC5655" />
          </TouchableOpacity>
        </ImageBackground>

        <Header />


        <Content />
        <Title text='İmkanlar' size={21} weight='600' style={{ marginTop: 18 }} />
        <View style={{ paddingBottom: 10, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{ justifyContent: 'center', gap: 4, alignItems: 'center', width: 80, height: 80, backgroundColor: '#F3F8FE', borderRadius: 16 }}>
            <Image source={require('@/assets/icons/wifi.png')} />
            <Text style={{ color: '#B8B8B8' }}>Wifi</Text>
          </View>
          <View style={{ justifyContent: 'center', gap: 4, alignItems: 'center', width: 80, height: 80, backgroundColor: '#F3F8FE', borderRadius: 16 }}>
            <Image source={require('@/assets/icons/dinner.png')} />
            <Text style={{ color: '#B8B8B8' }}>Yemek</Text>
          </View>
          <View style={{ justifyContent: 'center', gap: 4, alignItems: 'center', width: 80, height: 80, backgroundColor: '#F3F8FE', borderRadius: 16 }}>
            <Image source={require('@/assets/icons/tub.png')} />
            <Text style={{ color: '#B8B8B8' }}>Duş</Text>
          </View>
          <View style={{ justifyContent: 'center', gap: 4, alignItems: 'center', width: 80, height: 80, backgroundColor: '#F3F8FE', borderRadius: 16 }}>
            <Image source={require('@/assets/icons/pool.png')} />
            <Text style={{ color: '#B8B8B8' }}>Havuz</Text>
          </View>
        </View>
      </Scroll>
      <Footer />
    </SafeAreaView>
  )
}

const Header = () => {
  const { details } = useStore() as { details: PopularDetails };

  const OpenAtMap = (title: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Harita Açılamıyor', 'Bu URL desteklenmiyor: ' + url);
        }
      })
      .catch((err) => console.error('Error:', err));

  }

  return (
    <>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontWeight: '600', fontSize: 24, flexShrink: 1 }}>{details.title}</Text>
        <TouchableOpacity onPress={() => OpenAtMap(details.title)}>
          <Text style={{ color: '#196EEE', fontWeight: 'bold', marginLeft: 10 }}>Haritada Göster</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 8, marginBottom: 14, alignItems: 'center', borderRadius: 25, flexDirection: 'row', gap: 3 }}>
        <Icon name="star" size={16} color="gold" />
        <Text style={{ fontSize: 12, color: '#606060' }}>{details?.rating}.0</Text>
        <Text style={{ fontSize: 12, color: '#606060' }}>(355 yorumlar)</Text>
      </View>
    </>
  )
}
const Content = () => {
  const { details } = useStore() as { details: PopularDetails };


  const [numberOfLines, setNumberOfLines] = useState<number>(4)
  const showMore = () => {
    if (numberOfLines === 0) {
      setNumberOfLines(4)
    } else {
      setNumberOfLines(0)
    }
  }
  return (
    <View>
      <Text numberOfLines={numberOfLines}>{details?.description}</Text>
      <TouchableOpacity onPress={showMore}>
        {numberOfLines !== 0 ?
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontWeight: 'semibold', color: '#196EEE' }} >Devamını Oku</Text>
            <AntDesign name='down' size={14} style={{ fontWeight: 'bold', marginTop: 3 }} color={"#196EEE"} />
          </View>
          :
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#196EEE', fontWeight: 'semibold' }}>Küçült</Text>
            <AntDesign name='up' size={14} color={"#196EEE"} style={{ fontWeight: 'bold', marginTop: 3 }} />
          </View>
        }
      </TouchableOpacity>
    </View>
  )
}
const Footer = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontWeight: 'medium' }}>Fiyat</Text>
        <Text style={{ color: '#2DD7A4', fontSize: 24, fontWeight: 'bold' }}>1000 TL</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#196EEE', width: 220, height: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Details