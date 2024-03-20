import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';
import { Magnetometer, Accelerometer, Gyroscope } from 'expo-sensors';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';

const AppScreen = ({ navigation }) => {
  const [isReading, setIsReading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isReading) {
      const magnetometerSubscription = Magnetometer.addListener(({ x, y, z }) => {
        setData(prevData => [...prevData, { type: 'Magnetometer', x, y, z }]);
      });
      const accelerometerSubscription = Accelerometer.addListener(({ x, y, z }) => {
        setData(prevData => [...prevData, { type: 'Accelerometer', x, y, z }]);
      });
      const gyroscopeSubscription = Gyroscope.addListener(({ x, y, z }) => {
        setData(prevData => [...prevData, { type: 'Gyroscope', x, y, z }]);
      });

      return () => {
        magnetometerSubscription.remove();
        accelerometerSubscription.remove();
        gyroscopeSubscription.remove();
      };
    }
  }, [isReading]);

  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleReading = () => {
    setIsReading(prevState => {
      if (!prevState) {
        // If starting reading, clear previous data
        setData([]);
      }
      return !prevState;
    });
  };

  const createCSV = async () => {
    try {
      const timestamp = new Date().toISOString().replace(/:/g, "-");
      const csvContent = data.map((entry, index) => {
        return `${entry.type},${entry.x},${entry.y},${entry.z},${timestamp}`;
      }).join('\n');
      const fileName = `${FileSystem.documentDirectory}data_${timestamp}.csv`;
      await FileSystem.writeAsStringAsync(fileName, csvContent, { encoding: FileSystem.EncodingType.UTF8 });
      await Sharing.shareAsync(fileName);
    } catch (error) {
      console.error('Error creating CSV file:', error);
    }
  };

const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
    Alert.alert("Você não deixou o cu aberto")

    return;
    }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Salvo com sucesso!",
      body: "O ficheiro foi salvo com sucesso!"
    },
    trigger: {  
      seconds: 5,
    },
  });
};

  return (
    <ImageBackground
      source={require('./assets/images/fundo.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/health.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.title}>HealthLife</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isReading ? '#c0392b' : '#2980b9' }]}
            onPress={toggleReading}
          >
            <Text style={styles.buttonText}>{isReading ? 'Stop Reading' : 'Start Reading'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await createCSV();
              await handleCallNotifications();
            }}
          >
            <Text style={styles.buttonText}>Export CSV</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 14,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 65,
    backgroundColor: '#0b6efe',
    borderRadius: 12,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AppScreen;
