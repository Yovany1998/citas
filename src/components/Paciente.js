import React from 'react';
import { Text, View,StyleSheet, Pressable } from 'react-native';
import { formateaFecha } from '../helpers';
const Paciente = ({
    item,
     setModalVisible,
     setPaciente,
     pacienteEditar,
     pacienteEliminar,
    setModalPaciente,
    contador
    }) => {

    const{paciente ,fecha, id} = item


 
  
  return (
      <Pressable
      onLongPress={() =>{
        setModalPaciente(true)
        setPaciente(item)

      }}
      >

    
    <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formateaFecha(fecha)}</Text>
        <View style={styles.contenedorBotones}>

         
            <View>{contador === 0 ?
            (
            <Pressable style={[styles.btn, styles.btnEditar]}
            onLongPress={()=>{
                setModalVisible(true)
                pacienteEditar(id)
            }}
            >
            <Text style={styles.btnTexto}>Editar</Text>
            </Pressable>)
            : null }
            </View>
         
               
           
            <View>
            <Pressable style={[styles.btn, styles.btnEliminar]}
                                    onLongPress={() => pacienteEliminar(id)}
                        >
                            <Text>Eliminar</Text>
                        </Pressable>
            </View>
           
        </View>
    </View>

    </Pressable>
  )
};

const styles =StyleSheet.create({
contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1

},
label: {
color: '#94A3B8',
textTransform: 'uppercase',
fontWeight: '700',
marginBottom: 10

},
texto:{
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
},
fecha: {
    color: '#374151'
},
contenedorBotones:{
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginTop: 20
},
btn:{
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5
},
btnEditar:{
    backgroundColor:'#F59E0B'
},
btnEliminar:{
backgroundColor: '#EF4444'
},
btnTexto:{
textTransform: 'uppercase',
fontWeight: '900',
fontSize: 12,
color: '#FFF'
},
})

export default Paciente;
