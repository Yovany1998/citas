import React from 'react';
import {Text,
     SafeAreaView,
      StyleSheet,
      View,
      Pressable} from 'react-native'

import { formateaFecha } from '../helpers';
const InformacionPaciente = ({paciente, setModalPaciente,setPaciente}) => {
    
  return (
      <SafeAreaView style={styles.contenedor}>
          <View>

          <Text style={styles.titulo}>Informacion {''}
            <Text style={styles.tituloBold}>Paciente</Text>
        </Text>

              <Pressable
              style={styles.btnCerrar}
              onLongPress={()=> {
                setModalPaciente(false)
                setPaciente({})
              }
                
            }
              >
                  <Text style={styles.btnCerrarTexto}>X Cerra</Text>
              </Pressable>
          </View>
            <View
            style={styles.contenido}
            >
                <View style={styles.campo}>
                <Text style={styles.letras,styles.label}>Nombre</Text>
                <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>

                <View style={styles.campo}>
                <Text style={styles.label}>Propietario</Text>
                <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>

                <View style={styles.campo}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.valor}>{paciente.email}</Text>
                </View>

                <View style={styles.campo}>
                <Text style={styles.label}>Telefono</Text>
                <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>

                <View style={styles.campo}>
                <Text style={styles.label}>Fecha</Text>
                <Text style={styles.valor}>{formateaFecha(paciente.fecha)}</Text>
                </View>
           
            </View>


      </SafeAreaView>

  )
};

const styles = StyleSheet.create({
 contenedor: {
    
    backgroundColor: '#F59E0B',
    flex: 1
 },
 titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign:'center',
    marginTop : 30,
    color: '#FFF'
},
tituloBold: {
    fontWeight: '900',

},
btnCerrar:{
    marginTop: 20,
    backgroundColor: '#4827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
   
},
btnCerrarTexto:{
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
    
},
contenido:{
    backgroundColor:'#FFF',
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    //Esta parte es para controlar la sombra del contenedor
    shadowOffset: {
        //Direcciones
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    //Largo de la sombre en android
    elevation: 9,
    },
    letras:{
    color: '#000'
    },
    campo:{
        marginBottom: 10
    },
    label:{
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        marginBottom: 3,
        fontSize: 12
    },
    valor:{
        fontWeight :'700',
        fontSize: 20,
        color:'#334155'

    }


})


export default InformacionPaciente;
