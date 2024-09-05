import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{ paddingHorizontal: 20, backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={{ fontSize: 15 }}>Explore</Text>
        <View>
          <Text style={{ fontSize: 15 }}>Aspen, USA</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 32, fontWeight: '800' }}>ASPEN</Text>
      </View>
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
      <View style={{ marginTop: 22 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 21, fontWeight: 'semibold' }}>Popular</Text>
          <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#196EEE' }}>See All</Text>
        </View>
        <ScrollView style={{ marginTop: 12 }}
          horizontal={true}
        >
          <View style={{ marginRight: 12 }}>
            <ImageBackground source={require('@/assets/images/Popular1.png')} style={{ width: 180, height: 240, flexDirection: 'row', alignItems: 'flex-end' }} resizeMode="contain" >
              <View style={{ height: 70, backgroundColor: 'yellow', paddingHorizontal: 12 }}>
                <View style={{ alignItems: 'center',  borderRadius: 25, paddingHorizontal: 15,paddingVertical: 5, backgroundColor: 'red' }}>
                  <Text style={{ color: 'white' }}>Alley Palace</Text>
                </View>
                <View style={{ marginTop: 4, width: 60, alignItems: 'center', borderRadius: 25, padding: 4, backgroundColor: 'red' }}>
                  <Text style={{ color: 'white' }}>3</Text>
                </View>
              </View>
              <View>
                <Text>SAG</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
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
