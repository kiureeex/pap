import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import AppScreen from './HealthLife';
import Settings from './Settings'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
    <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Auth" 
        screenOptions={{
          tabBarStyle: {  
            borderTopEndRadius: 35,
            borderTopStartRadius: 35,
            paddingTop: 16,
            alignItems: 'center',
            alignSelf: 'center', 
            height: 90,

            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2},
            shadowOpacity: 0.75,
            shadowRadius: 3,
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
          headerShown: false, 
        }}>
        <Tab.Screen
          name="Auth" 
          component={AuthStack}
          options={{ 
            tabBarIcon: ({ size, color }) => (
              <Entypo name="login" size={size} color={color} /> 
            ),
            tabBarLabel: 'Login', 
            tabBarLabelStyle: {
              fontFamily: 'Outfit',
              fontSize: 13,
              marginTop: -5,
            }
          }}
        />
        <Tab.Screen
          name="AppScreen"
          component={AppScreen}
          options={{ 
            tabBarIcon: ({size, color }) => (<Entypo name="home" size={size} color={color} />),
            tabBarLabelStyle: {
              fontFamily: 'Outfit',
              fontSize: 13,
              marginTop: -5,
            }
          }} 
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ 
            tabBarIcon: ({ size, color }) => (
              <Entypo name="cog" size={size} color={color} /> 
            ),
            tabBarLabel: 'Settings', 
            tabBarLabelStyle: {
              fontFamily: 'Outfit',
              fontSize: 13,
              marginTop: -5,
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );  
};

export default App;
