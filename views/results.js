import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
/*import MainScreen from './views/main.js';*/
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient} from 'expo-linear-gradient';

const { Navigator, Screen } = createStackNavigator();

export default function ResultsScreen({navigation}) {
  return (
    <LinearGradient colors={['#0C591E', '#28A745', '#28A745']} style={styles.linearGradient}>

      <View style={styles.content}>
       <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.headerText}>{"< Voltar"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Concurso 2540 (19/11/2022)</Text>
        </View>
        <View style={styles.results}>
          <Text style={styles.resultText}>Sua aposta:</Text>
          <View style={styles.ballRow}>
            <View style={styles.ball}><Text style={styles.ballNumber}>04</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>11</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>25</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>42</Text></View>
          </View>
          <Text style={styles.resultText}>Resultado:</Text>
          <View style={styles.ballRow}>
            <View style={styles.ball}><Text style={styles.ballNumber}>02</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>08</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>28</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>34</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>41</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>49</Text></View>
          </View>
        </View>
        <View style={styles.resultsInfo}>
          <Text style={styles.resultInfoTitle}>Premiação</Text>
          <Text style={styles.resultInfoSubTitle}>6 acertos</Text>
          <Text style={styles.resultInfoText}>Não houve ganhadores</Text>
          <Text style={styles.resultInfoSubTitle}>5 acertos</Text>
          <Text style={styles.resultInfoText}>90 apostas ganhadoras, R$ 45.937,77</Text>
          <Text style={styles.resultInfoSubTitle}>4 acertos</Text>
          <Text style={styles.resultInfoText}>6.404 apostas ganhadoras, R$ 922,28</Text>
          <Text style={styles.resultInfoTitle}>Arrecadação Total</Text>
          <Text style={styles.resultInfoSubTitle}>R$ 71.708.665,50</Text>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    flex: 0.10,
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 17,
  },
  title: {
    flex: 0.10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  titleText: {
    color: '#d6f850',
    fontSize: 22,
  },
  results: {
    flex: 0.20,
    width: '90%',
    marginBottom: 70,
    alignSelf: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 4,
    paddingBottom: 15,
  },
  ballRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  ball: {
    backgroundColor: '#e6e6e6',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 40,
  },
  ballNumber: {
    fontSize: 25,
    color: '#0C591E',
  },
  resultsInfo: {
    flex: 0.50,
    backgroundColor: '#e6e6e6',
    width: '90%',
    marginTop: 40,
    marginBottom: 70,
    alignSelf: 'center',
    borderRadius: 20,
  },
  resultInfoTitle: {
    paddingTop: 15,
    paddingLeft: 20,
    fontSize: 25,
    color: '#0C591E',
    fontWeight: 'bold',
  },
  resultInfoSubTitle: {
    paddingTop: 8,
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  resultInfoText: {
    paddingLeft: 20,
    fontSize: 15,
  },
  footer: {
    flex: 0.05,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    paddingBottom: 25,
    backgroundColor: 'red',
  },
});
