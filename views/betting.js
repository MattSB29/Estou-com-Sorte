import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';

export default function BettingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar animated={true} backgroundColor='black' hidden={true} /> 

      <View style={styles.header}>
        <View style={styles.screenTitle}><Text style={styles.text}>Nova Aposta</Text></View>
      </View>

      <View style={styles.content}>
        <View style={styles.betting}>
          <Text style={styles.money}>R$ 50.000.000,00</Text>
          <Text style={styles.betting01}>Estimativa próximo concurso</Text>
          <Text style={styles.money}>R$ 43.978.243,89</Text>
          <Text style={styles.betting01}>Acumulado próximo concurso</Text>
        </View>

        <View style={styles.bettingInfo}>
          <Text style={styles.betting02}>Sorteio</Text>
          <Text style={styles.betting03}>Quarta-feira, 30 de nov</Text>
          <Text style={styles.betting02}>Aposta se encerra em</Text>
          <Text style={styles.betting03}>10 minutos</Text>
        </View>
      </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><View>
            <Text style={styles.apostar}>Apostar</Text>
            <Text style={styles.bettingValue}>por R$ 5</Text>
          </View></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('History')}><View>
            <Text style={styles.back}>Voltar</Text>
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
    flexDirection: 'column',
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
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 0.78,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  betting: {
    flex: 0.7,
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  money: {
    color: '#0C591E',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  betting01: {
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  bettingInfo: {
    flex: 0.3,
    flexDirection: 'column',
    width: '100%',
  },
  betting02: {
    paddingLeft: 50,
    fontSize: 17,
  },
  betting03: {
    paddingLeft: 50,
    paddingBottom: 20,
    fontWeight: 'bold',
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
    flex: 0.15,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  button: {
    flex: 0.4,
    width: 350,
    backgroundColor: '#0C591E',
    paddingTop: 15,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  apostar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  bettingValue: {
    color: 'white',
    alignSelf: 'center',
  },
  back: {
    color: '#0C591E',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});