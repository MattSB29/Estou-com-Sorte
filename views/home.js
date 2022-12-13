import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient} from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}) {
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
      

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{"< Voltar"}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Acumulou!</Text>
        </View>
        <View style={styles.results}>
          <View style={styles.ballRow}>
            <View style={styles.ball}><Text style={styles.ballNumber}>10</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>28</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>45</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>47</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>57</Text></View>
            <View style={styles.ball}><Text style={styles.ballNumber}>59</Text></View>
          </View>
        </View>
        <View style={styles.resultsInfo}>
          <Text style={styles.resultInfoTitle}>Premiação</Text>
          <Text style={styles.resultInfoSubTitle}>6 acertos</Text>
          <Text style={styles.resultInfoText}>{data?.numero}</Text>
          <Text style={styles.resultInfoSubTitle}>5 acertos</Text>
          <Text style={styles.resultInfoText}>51 apostas ganhadoras, R$ 55.525,68</Text>
          <Text style={styles.resultInfoSubTitle}>4 acertos</Text>
          <Text style={styles.resultInfoText}>3.793 apostas ganhadoras, R$ 1.066,55</Text>
          <Text style={styles.resultInfoTitle}>Arrecadação Total</Text>
          <Text style={styles.resultInfoSubTitle}>R$ 49.116.033,00</Text>
        </View>
        <View style={styles.nextBetInfo}>
          <Text style={styles.nextBetInfoTitle}>Estimativa de prêmio próximo concurso</Text>
          <Text style={styles.nextBetInfoText}>R$ 50.000.000,00</Text>
          <Text style={styles.nextBetInfoTitle}>Acumulado próximo concurso</Text>
          <Text style={styles.nextBetInfoText}>R$ 43.978.243,89</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Betting')}><View>
          <Text style={styles.apostar}>Próximo Jogo</Text>
        </View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}><View>
          <Text style={styles.nextBetInfoTitle}>Voltar</Text>
        </View></TouchableOpacity>
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
  content: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    flex: 0.10,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  titleText: {
    color: '#d6f850',
    fontSize: 22,
  },
  results: {
    flex: 0.2,
    width: '90%',
    alignSelf: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 4,
  },
  ballRow: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    flex: 0.70,
    backgroundColor: '#e6e6e6',
    width: '90%',
    marginBottom: 15,
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
  nextBetInfo: {
    flex: 0.45,
    fontSize: 25,
    color: '#0C591E',
    fontWeight: 'bold',
  },
  nextBetInfoTitle: {
    color: 'white',
    paddingTop: 17,
    fontSize: 17,
    alignSelf: 'center',
  },
  nextBetInfoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  footer: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  button: {
    width: 350,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  apostar: {
    fontSize: 20,
    color: '#0C591E',
  },
});
