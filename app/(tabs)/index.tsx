import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import CommintyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 20, backgroundColor: 'white', flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 15 }}>Explore</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon name='location' size={15} color={'#196EEE'} />
            <Text style={{ fontSize: 15 }}>Aspen, USA</Text>
            <MaterialIcon name='keyboard-arrow-down' size={25} color={'#196EEE'}/>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 32, fontWeight: '800' }}>ASPEN</Text>
        </View>
        {/* SEARCH BOX  */}
        <View style={{ marginTop: 24 }}>
          <TextInput value={"Find things to do"} style={{ color: '#B8B8B8', fontSize: 13, paddingHorizontal: 16, backgroundColor: '#F3F8FE', height: 52, borderRadius: 24 }} />
        </View>
        {/* CATEGORY */}
        <View style={{ marginTop: 32, flexDirection: 'row', alignItems: 'center', gap: 24 }}>
          <View style={{ height: 42, backgroundColor: '#F3F8FE', borderRadius: 24, paddingHorizontal: 15, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#196EEE' }}>Location</Text>
          </View>
          <View>
            <Text style={{ color: '#B8B8B8' }}>Hotels</Text>
          </View>
        </View>
        {/* POPULAR */}
        <View style={{ marginTop: 22 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Popular</Text>
            <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#196EEE' }}>See All</Text>
          </View>
          <ScrollView style={{ marginTop: 12 }}
            horizontal={true}
          >
            <View style={{ marginRight: 12, }} >
              <ImageBackground source={require('@/assets/images/Popular1.png')} style={{ width: 180, height: 240, flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 10, justifyContent: 'space-between', }} resizeMode="contain" >
                <View style={{ height: 70, paddingHorizontal: 12 }}>
                  <View style={{ alignItems: 'center', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 5, backgroundColor: '#4D5652' }}>
                    <Text numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{ color: 'white', fontWeight: '400', minWidth: 30 }}
                    >Alley Palace</Text>
                  </View>
                  <View style={{ width: 70, marginTop: 4, paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center', borderRadius: 25, padding: 4, backgroundColor: '#4D5652', flexDirection: 'row', gap: 3 }}>
                    <Icon name="star" size={15} color="gold" />
                    <Text style={{ color: 'white' }}>3.1</Text>
                  </View>
                </View>
                <View style={{ marginBottom: 10, marginEnd: 12 }}>
                  <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="heart" size={23} color="red" />
                  </View>
                </View>
              </ImageBackground>
            </View>

          </ScrollView>


        </View>
        <View style={{ marginTop: 22, marginBottom: 100, flex: 1 }}>
          <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Recommended</Text>
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            marginTop: 8,
            width: 195,
            paddingHorizontal: 10,
            paddingVertical: 10,
            elevation: 5,              // Android
            shadowColor: '#030002',    // Android, iOS & Web
            shadowOpacity: 0.100,       // iOS & Web
            shadowRadius: 20
          }}>
            <Image source={require('@/assets/images/Recommended1.png')} style={{ width: 175, height: 100, backgroundColor: 'yellow', borderRadius: 14 }} />
            <Text style={{ fontSize: 15, fontWeight: 'medium', marginTop: 5 }}>Explore Aspen</Text>
            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              <CommintyIcon name='finance' size={21} color={'#84ABE4'} />
              <Text style={{ fontSize: 12, color: '#3A544F' }}>Hot Deal</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
