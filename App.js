import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Meunome from './componentes/primeiroComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Elda LAnches</Text>
      <Meunome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#288d11ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
