import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFonts } from 'expo-font'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useNavigation(); 

  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ImageBackground
      source={require('./assets/images/fundo.png')}
      style={styles.backgroundImage}
      >
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.imagemapp}
              source={require('./assets/images/health.png')}
            />

            <Text style={styles.title}>
              Login to <Text style={{ color: '#075eec', fontFamily: 'Outfit'}}>MyApp</Text>
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="Username, email & phone number"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]} 
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="Password"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]} 
                secureTextEntry={!showPassword}
                value={form.password} />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
                   <Text> {}
                <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#6b7280" /> {}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.otherOptionsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signUpLabel}>Create account</Text>
                </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.formLink}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </View>

            <View style={styles.formAction}>
            <TouchableOpacity onPress={() => navigation.navigate('AppScreen')}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <View style={styles.orsignupimagens}>
            <Image
              source={require('./assets/images/orsignup.png')}
              style={styles.imageStyle}
            />
                <Text style={styles.OrSignUp}>Or Sign up With</Text>

            <Image
              source={require('./assets/images/orsignup.png')}
              style={styles.imageStyle}
            />
            </View>

            <View style={styles.socialimages}>

            <TouchableOpacity onPress={() => { }}>
            <Image
              source={require('./assets/images/google.png')}
              style={styles.imagessocialstyle}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
            <Image
              source={require('./assets/images/facebook.png')}
              style={styles.imagessocialstyle}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
            <Image
              source={require('./assets/images/apple.png')}
              style={styles.imagessocialstyle}
            />
            </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  socialimages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginHorizontal: 70,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  OrSignUp : {
    fontSize: 15,
    marginTop: 6,
    fontWeight: '600',
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  otherOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute', 
    right: 16, 
    top: '50%', 
    transform: [{ translateY: -12 }],
  },
  orsignupimagens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginHorizontal: 25,
  },
  signUpLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  separator: {
    width: 10, 
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 28,
  },
  imagemapp: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 28,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  imagessocialstyle: {
    width: 40, 
    height: 40, 
    alignItems: 'center',
  },
  imageStyle: {
    width: 115, 
    height: 6, 
    alignItems: 'center',
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'left',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    position: 'relative',
    justifyContent: 'space-between',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 370, 
    height: 65, 
    backgroundColor: '#0b6efe',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 24, 
    lineHeight: 26,
    fontWeight: 'bold', 
    color: '#fff',
  },
});
