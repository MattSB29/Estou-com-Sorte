import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
/*import MainScreen from './views/main.js';*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';

const { Navigator, Screen } = createStackNavigator();

export default function Settings({navigation}) {
  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar animated={true} backgroundColor='black' hidden={true} /> 

      <View style={styles.header}>
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text}>{"< Voltar"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screenTitle}><Text style={styles.text}>Configurações</Text></View>
      </View>

      <View style={styles.content}>
        <View style={styles.settings}></View>
        <View style={styles.settings}><Text>Configurações Pessoais</Text></View>
        <View style={styles.settings}><Text>Tema do aplicativo</Text></View>
        <View style={styles.settings}><Text>Como jogar</Text></View>
        <View style={styles.settings}><Text>Outros jogos</Text></View>
        <View style={styles.settings}><Text>Remover conta</Text></View>
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
    flex: 0.93,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  settings: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
    width: 370,
  },
  text: {
    color: 'white',
  },
});
