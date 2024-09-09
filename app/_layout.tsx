import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'SplashPage',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='SplashPage' screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
        <Stack.Screen name="SplashPage" options={{ headerShown: false }} />
        <Stack.Screen name="Details" options={{
          title: '',
          headerShown: true,
          headerTransparent: true,

          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ borderRadius: 8, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
              <AntDesign name="left" size={24} color="#B8B8B8" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}