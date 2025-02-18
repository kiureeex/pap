import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Forgot = () => {
  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/images/fundo.png')}
      style={styles.backgroundImage}
      >
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.imagemapp}
              source={require('./assets/images/reset-password.png')}
            />

            <Text style={styles.title}>
              Forgot <Text style={{ color: '#075eec', fontFamily: 'Outfit' }}>Password</Text>
            </Text>
          </View>

          <Text style={styles.textoredefinir}>Para redefinir a senha, informe o email registado na sua conta. </Text>

          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, { fontFamily: 'Outfit' }]}
              />  
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
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
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
    marginBottom: 36,
  },
  cancelar : {
    fontSize: 16,
    marginTop: 10,
    color: '#075eec',
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
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
  },
  formAction: {
    marginBottom: 45,
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
  },
  btnText: {
    fontSize: 24, 
    lineHeight: 26,
    fontWeight: 'bold', 
    color: '#fff',
  },
  input: {
    width: 360,
    marginTop: 30,
  },
  form: {
    marginBottom: 35,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default Forgot;
