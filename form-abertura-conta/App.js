import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import {styles} from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: 'Masculino',
      escolaridade: 'Médio',
      limite: 0,
      brasileiro: false,
      resultado: ''
    };
    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
    this.setState({
      resultado: 'Nome: ' + this.state.nome + '\n' +
                 'Idade: ' + this.state.idade + '\n' +
                 'Sexo: ' + this.state.sexo + '\n' +
                 'Escolaridade: ' + this.state.escolaridade + '\n' +
                 'Limite: ' + this.state.limite + '\n' +
                 ( (this.state.brasileiro) ? 'Brasileiro' : 'Estrangeiro' )
    });
  }
 
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.titulo}>Abertura de Conta</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({nome: valor})}
          />

          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(valor) => this.setState({idade: valor})}
            
          />

          <Text style={styles.label}>Sexo</Text>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
          >
            <Picker.Item key={1} value='Masculino' label="Masculino" />
            <Picker.Item key={2} value='Feminino' label="Feminino" />
          </Picker>

          <Text style={styles.label}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
          >
            <Picker.Item key={1} value='Médio' label="Médio" />
            <Picker.Item key={2} value='Graduação' label="Graduação" />
            <Picker.Item key={3} value='Pós Graduação' label="Pós Graduação" />
            <Picker.Item key={4} value='MBA' label="MBA" />
          </Picker>

          <Text style={styles.label}>Limite</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            step={50}
            value={this.state.limite}
            onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
            
          />
          <Text style={styles.limite}>{this.state.limite}</Text>

          <Text style={styles.label}>Brasileiro</Text>
          <Switch 
          value={this.state.brasileiro}
          onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}
          />


          <Button title="Confirmar" onPress={this.confirmar} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>
        </View>
      </ScrollView>
    );
  }
}
 
export default App;