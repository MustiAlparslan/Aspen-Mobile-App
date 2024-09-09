import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from '../pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function HomeScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <HomePage />
      </SafeAreaView>
    </QueryClientProvider>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
