import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
/*import MainScreen from './views/main.js';*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';

const { Navigator, Screen } = createStackNavigator();

export default function HistoryScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}> 
      <StatusBar animated={true} backgroundColor='black' hidden={true} /> 

      <View style={styles.header}>
        <View style={styles.screenTitle}><Text style={styles.text}>Histórico</Text></View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Results')}><View style={styles.history}><Text>Concurso 2534 (29/10/2022)</Text></View></TouchableOpacity>
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
  logout: {
    flex: 0.35,
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 25,
  },
  screenTitle: {
    flex: 0.65,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 30,
    marginBottom: 2,
  },
  content: {
    flex: 0.93,
    width: 411,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  history: {
    marginTop: 10,
    width: 380,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
  },
});
