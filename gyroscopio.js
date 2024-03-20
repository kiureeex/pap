import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { useState, useEffect } from 'react';
import { Gyroscope } from 'expo-sensors';


export default function App() {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      setGyroscopeData({ x, y, z });
    });


    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giroscópio</Text>
      <Text>X: {gyroscopeData.x.toFixed(2)}</Text>
      <Text>Y: {gyroscopeData.y.toFixed(2)}</Text>
      <Text>Z: {gyroscopeData.z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB', 
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#161616',
  },
});