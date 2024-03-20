import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Accelerometer } from 'expo-sensors';

export default function ButtonTest() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acelerómetro</Text>
      <Text>X: {x.toFixed(2)}</Text>
      <Text>Y: {y.toFixed(2)}</Text>
      <Text>Z: {z.toFixed(2)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(2000)}>
          <Text style={styles.buttonText}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(50)}>
          <Text style={styles.buttonText}>Fast</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498DB', 
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10, 
  },
  button: {
    borderWidth: 1,
    borderColor: '#3498DB',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#3498DB',
    fontSize: 16,
  },
});