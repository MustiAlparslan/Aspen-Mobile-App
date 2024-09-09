import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            height: 70,
            borderColor: 'white'
          },
          tabBarLabelStyle: {
            fontSize: 12, // Sekme metin boyutu
            fontWeight: '600', // Sekme metin kalınlığı
          },
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Entypo name='home' color={focused ? '#196EEE' : '#B8B8B8'} size={25} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Entypo name='heart' color={focused ? '#196EEE' : '#B8B8B8'} size={25} />

            ),
          }}
        />
        <Tabs.Screen
          name="test"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 name="user-alt" color={focused ? '#196EEE' : '#B8B8B8'} size={21} F />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

