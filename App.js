import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
} from 'react-native';

import Formulario from './src/components/Formulario';

const App=  () => {
//Los hooks se colocan en la parte superior
const[modalVisible, setModalVisible] = useState(false)





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
    {/* Props para pasar datos de un formulario a otro */}
  <Formulario
    modalVisible={modalVisible}
    
  />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
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
}

});

export default App;
