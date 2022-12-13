import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
/*import MainScreen from './views/main.js';*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar animated={true} backgroundColor='black' hidden={true} /> 

      <View style={styles.header}>
        <View style={styles.goBack}><Text style={styles.text}>{"< Voltar"}</Text></View>
        <View style={styles.screenTitle}><Text style={styles.text}>Configurações</Text></View>
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nome:</Text>
          <TextInput style={styles.input} />
          <Text style={styles.inputTitle}>Nome de Usuário:</Text>
          <TextInput style={styles.input} />
          <Text style={styles.inputTitle}>Email:</Text>
          <TextInput style={styles.input} />
          <Text style={styles.inputTitle}>Senha:</Text>
          <TextInput style={styles.input} />
          <Text style={styles.inputTitle}>Confirme sua senha:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><View>
            <Text>Confirmar</Text>
          </View></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.07,
    flexDirection: 'row',
    width: 412,
    backgroundColor: '#0C591E',
  },
  goBack: {
    flex: 0.4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 17,
    marginLeft: 15,
  },
  screenTitle: {
    flex: 0.4,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 39,
  },
  content: {
    flex: 0.83,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  form: {
    paddingTop: 20,
  },
  inputTitle: {
    paddingLeft: 20,
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  footer: {
    flex: 0.10,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  button: {
    flex: 0.4,
    width: 350,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
