import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';
import AsyncStorage from '@react-native-async-storage/async-storage'

const App=  () => {
//Los hooks se colocan en la parte superior
const[modalVisible, setModalVisible] = useState(false)
const[pacientes,setPacientes] = useState([])
const[paciente,setPaciente] = useState({})
const [modalPaciente, setModalPaciente]= useState(false)
const [contador, guardarContador]= useState(0)


useEffect(() => {
  const obtenerCitasStorage= async () => {
    try {
      const citasStorage = await AsyncStorage.getItem('pacientes')
      if(citasStorage){
       setPacientes(JSON.parse(citasStorage));
       if(citasStorage.length > 5){
        guardarContador(1);
       }
   
      }
    } catch (error) {
      console.log(error);
    }
  }
  obtenerCitasStorage();
 }, []);

 
  const pacienteEditar = id => {
  const pacienteEditar = pacientes.filter(paciente => paciente.id === id)

  setPaciente(pacienteEditar[0])
  }


const pacienteEliminar = id => {
  Alert.alert(
    '¿Deseas eliminar este paciente?',
    'Un paciente eliminado no se puede recuperar',
    [
      {text: 'Cancelar'},
      { text: 'Si, Eliminar',onPress: () =>{
        const pacientesActualizados = pacientes.filter(
          pacientesState => pacientesState.id !== id
        )
        setPacientes(pacientesActualizados)
        guardarCitasStorage(JSON.stringify(pacientesActualizados))

      }}

    ]
  )
}

//arrow funcion para desmontar el formulario
const cerrarModal = () =>(
  setModalVisible(false)
)

const cerrarTeclado =() =>{
    Keyboard.dismiss();
}
//Alamacenar las citas en storage
const guardarCitasStorage = async (pacientesJSON) =>{
  try {
    await AsyncStorage.setItem('pacientes',pacientesJSON);
  } catch (error) {
    console.log(error);
  }
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
      setPaciente={setPaciente}
      pacienteEditar={pacienteEditar}
      pacienteEliminar={pacienteEliminar}
      setModalPaciente={setModalPaciente}
      contador={contador}
      />
        )
    } 
    }
   />
    
    }


    {/* Props para pasar datos de un formulario a otro */}
    {/* Lo ideal seria usar el modal para desmontarlo el solo, pero
    por si usamos un formulario lo condicionamos para que no siempre se monte */}
    {modalVisible && (

      <Formulario
          guardarCitasStorage={guardarCitasStorage}
          cerrarModal={cerrarModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
          setPaciente= {setPaciente}  
          guardarContador={guardarContador}

      />
    )}


  <Modal
  visible={modalPaciente}
  animationType='fade'
  >
    <InformacionPaciente
    paciente={paciente}
    setPaciente={setPaciente}
    setModalPaciente={setModalPaciente}
    />
  </Modal>
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
  fontWeight: '600',
  color: '#000'
},
listado:{
  marginTop: 50,
  marginHorizontal: 50
}

});

export default App;
