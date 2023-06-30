import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Tela1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Umbrella</Text>
      <text>A Umbrella Corporation é uma organização fictícia amplamente conhecida no universo da franquia "Resident Evil". Ela é retratada como uma empresa multinacional poderosa e obscura, envolvida em atividades ilegais, como pesquisas genéticas, experimentação em humanos e desenvolvimento de armas biológicas.

Na história de "Resident Evil", a Umbrella Corporation é responsável pela criação do T-Vírus, um agente biológico altamente perigoso que causa mutações em seres humanos, transformando-os em zumbis e criaturas monstruosas. Esses surtos de vírus ocorrem em várias localidades, como a Mansão Spencer, Raccoon City e outros lugares relacionados aos jogos e filmes da franquia.

A Umbrella Corporation é frequentemente retratada como uma entidade corrupta e maquiavélica, colocando os lucros e o poder acima da ética e da segurança da população. Ela serve como a principal antagonista da série, com os protagonistas tentando expor as atividades ilícitas da corporação e impedir a propagação dos vírus mortais por ela criados.

A icônica logomarca da Umbrella Corporation, composta por um guarda-chuva vermelho e branco, tornou-se um símbolo reconhecido pelos fãs da franquia "Resident Evil" em todo o mundo.</text>
    </View>
  );
}

function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cientistas Famosos</Text>
      <text>Na franquia "Resident Evil", a Umbrella Corporation é retratada como uma organização complexa e secreta, e várias figuras científicas estão associadas a ela. Aqui estão alguns dos principais cientistas da Umbrella Corporation:

Dr. James Marcus: Co-fundador da Umbrella Corporation junto com Ozwell E. Spencer e Edward Ashford. Marcus foi responsável pela descoberta do Progenitor Virus e é considerado o pai dos vírus usados pela Umbrella.

Dr. William Birkin: Um renomado cientista que trabalhou na Umbrella Corporation. Ele foi o principal responsável pelo desenvolvimento do G-Virus, uma mutação avançada do Progenitor Virus.

Dr. Albert Wesker: Embora inicialmente tenha sido um agente da S.T.A.R.S. (Special Tactics and Rescue Service), Wesker se tornou um dos cientistas mais importantes da Umbrella. Ele estava envolvido em experimentos genéticos e foi responsável por traições e conspirações dentro da organização.

Alexia Ashford: Membro da família Ashford, Alexia foi uma prodígio científica e geneticista da Umbrella Corporation. Ela foi responsável pela criação do vírus T-Veronica, uma poderosa arma biológica.

Dr. John Clemens: Cientista da Umbrella que trabalhou no desenvolvimento do vírus NE-α Type. Ele aparece no jogo "Resident Evil Outbreak" como um personagem importante.

Esses são apenas alguns dos cientistas destacados na narrativa da Umbrella Corporation ao longo dos jogos, filmes e outras mídias da franquia "Resident Evil". Vale ressaltar que a história da Umbrella Corporation é complexa e envolve muitos outros personagens e cientistas que contribuíram para os experimentos e criação de armas biológicas da organização.</text>
    </View>
  );
}

function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Faça parte da Umbrella</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o E-Mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Insira o CPF"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Umbrella" component={Tela1} />
        <Drawer.Screen name="Cientistas" component={Tela2} />
        <Drawer.Screen name="Inscrição" component={Tela3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

