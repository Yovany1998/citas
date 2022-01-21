import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
const App=  () => {
//Los hooks se colocan en la parte superior
const[modalVisible, setModalVisible] = useState(false)
const[pacientes,setPacientes] = useState([])
const[paciente,setPaciente] = useState({})

const pacienteEditar = id => {
  const pacienteEditar = pacientes.filter(paciente => paciente.id === id)

setPaciente(pacienteEditar[0])
}


  return (
    <SafeAreaView style={styles.container}>
  <Text style={styles.titulo}>Administracion de citas {''}</Text>
    <Text style={styles.tituloBold}>Veterinaria</Text>

    <Pressable
    style={styles.btnNuevaCita}
    onPress={()=> setModalVisible(true)}
    
    >
      <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
    </Pressable>

    {pacientes.length === 0 ?
    <Text style={styles.noPacientes}>No hay pacientes aun</Text>:
   <FlatList
   style={styles.listado}
   data={pacientes}
   keyExtractor={(item) =>item.id}
   renderItem={({item})=>{
    return(
    <Paciente
    item={item}
    setModalVisible={setModalVisible}
    pacienteEditar={pacienteEditar}
    />
      )
   }
   
  
  }
   />
    
    }

    {/* Props para pasar datos de un formulario a otro */}
  <Formulario
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    pacientes={pacientes}
    setPacientes={setPacientes}
    
  />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    // backgroundColor:'#6D28D9',
    flex: 1
  },
  titulo: {
    textAlign:'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
tituloBold: {
  fontWeight: '900',
  color: '#6D2809',
  textAlign:'center',
},
btnNuevaCita:{
backgroundColor: '#6D28D9',
padding: 15,
marginTop:30,
marginHorizontal: 20,
borderRadius:10
},
btnTextoNuevaCita:{
textAlign:'center',
color: '#FFF',
fontSize:18,
fontWeight: '900',
textTransform: 'uppercase'
},
noPacientes:{
marginTop: 40,
textAlign: 'center',
fontSize: 24,
fontWeight: '60'
},
listado:{
  marginTop: 50,
  marginHorizontal: 50
}

});

export default App;
