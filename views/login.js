import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

export default function Login({navigation}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/2547", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally((data) => console.log(data))
  }, []);

  return (
    <LinearGradient colors={['#0C591E', '#28A745', '#28A745']} style={styles.linearGradient}>
      <View style={styles.content}>

        <View style={styles.img}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.logoText}>Estou com Sorte</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputText}>Email:</Text>
          <TextInput style={styles.input} value={""} />
          <Text style={styles.inputText}>Senha:</Text>
          <TextInput style={styles.input} value={""} />

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.formOption}>Avançar</Text>
          </TouchableOpacity>
        </View>

          <Text style={styles.formOption}>Esqueci minha senha</Text>
          <Text style={styles.formOption}>Criar conta</Text>
        </View>

      </View>
      <View style={styles.footer}>

        <Text style={styles.copyright}>
          © 2022, Matheus Bastos. Todos os direitos reservados.
        </Text>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5
  },
  content: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  img: {
    flex: 0.36,
    alignSelf: 'center',
    width: '67%',
    marginBottom: 5,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    width: 170,
  },
  logoText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 30,
  },
  form: {
    flex: 0.3,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 230,
    width: '80%',
  },
  inputText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  formOption: {
    color: 'white',
    paddingTop: 15,
    alignSelf: 'center',
  },
  button: {
    width: 150,
    backgroundColor: 'blue',
    paddingBottom: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.05,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  copyright: {
    color: 'white',
  },
});