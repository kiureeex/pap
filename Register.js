import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground  } from 'react-native';
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
  
    const navigation = useNavigation(); // Use the useNavigation hook to access the navigation object
  
    // Load the "Outfit" font
    const [fontsLoaded] = useFonts({
      Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
    });
  
    if (!fontsLoaded) {
      return null; 
    }

  return (
    <ImageBackground
      source={require('./assets/images/fundo.png')} // Set the path to your image
      style={styles.backgroundImage}
      >
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.container}>
        <KeyboardAwareScrollView>
        <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.imagemapp}
              source={require('./assets/images/register.png')}
            />
        <View style={styles.header}>
            <Text style={styles.title}>
              Register <Text style={{ color: '#075eec', fontFamily: 'Outfit' }}>Details</Text>
            </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')} 
            >
            <Image
                source={require('./assets/images/arrow.png')}
                style={styles.arrowIcon}
            />
            </TouchableOpacity>
        </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Username"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]}
              />  
            </View>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]}
              />  
            </View>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Phone Number"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]}
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
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {}}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Enviar</Text>
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
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    tintColor: 'black',
    flex: 1,
  },
  toggleButton: {
    position: 'absolute', 
    right: 16, 
    top: '50%', 
    transform: [{ translateY: -12 }],
  },
  OrSignUp : {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline'
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  textoredefinir: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Outfit'
  },
  imagemapp: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 6,
  },
  cancelar : {
    fontSize: 16,
    marginTop: 10,
    color: '#075eec',
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 115, 
    height: 6, 
    alignItems: 'center',
  },
  orsignupimagens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 16,
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
  socialimages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginHorizontal: 70,
  },
  formAction: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 370, 
    height: 65, 
    backgroundColor: '#0b6efe',
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    fontSize: 24, 
    lineHeight: 26,
    fontWeight: 'bold', 
    color: '#fff',
  },
  input: {
    width: 360,
    justifyContent: 'center',
  },
  form: {
    marginBottom: 6,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    gap: 10,
  },
});

