import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default function App() {
  const [magnetometerData, setMagnetometerData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscribeMagnetometer = () => {
      Magnetometer.addListener((result) => {
        setMagnetometerData(result);
      });

      Magnetometer.setUpdateInterval(100); 
    };

    const unsubscribeMagnetometer = () => {
      Magnetometer.removeAllListeners();
    };

    subscribeMagnetometer();

    return () => {
      unsubscribeMagnetometer();
    };
  }, []); 

  return (
    <View style={styles.container}>
        <Text style={styles.title}>magnetometro</Text>
      <Text style={styles.text}>
       
        {'\n'}
        X: {magnetometerData.x.toFixed(2)}
        {'\n'}
        Y: {magnetometerData.y.toFixed(2)}
        {'\n'}
        Z: {magnetometerData.z.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      text: {
        fontSize: 18,
        textAlign: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3498DB',
      },
});