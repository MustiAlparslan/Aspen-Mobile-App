import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

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
            tabBarItemStyle: {
              // backgroundColor: focused ? Colors[colorScheme ?? 'light'].activeBackground : Colors[colorScheme ?? 'light'].inactiveBackground, // Aktif/Pasif sekme arka plan rengi
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="test"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

