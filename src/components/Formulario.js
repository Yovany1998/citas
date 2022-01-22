import React, { useState, useEffect } from 'react'
import { Modal,
        Text,
        Button,
        SafeAreaView,
        StyleSheet,
        TextInput,
        View,
        ScrollView,
        Pressable,
        Alert,

} from 'react-native';
import DatePicker from 'react-native-date-picker';



const Formulario = ({
    modalVisible,
    cerrarModal,
     setPacientes,
     pacientes, 
     paciente: pacienteObj,
    setPaciente : setPacienteApp}) => {
    
 
    const [id, setId]= useState('')
    const [paciente,setPaciente]= useState('')
    const [propietario,setPropietario]= useState('')
    const [email,setEmail]= useState('')
    const [telefono,setTelefono]= useState('')
    const [fecha,setFecha]= useState(new Date())
    const [sintomas,setSintomas]= useState('')

    useEffect(() => {
        if(Object.keys(pacienteObj).length > 0){
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setFecha(pacienteObj.fecha)
            setSintomas(pacienteObj.sintomas)

        }
    }, [pacienteObj])

    const handlerCita = ()=>{
        //validar
        if([paciente, propietario, email, fecha. sintomas].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos deben ser obligatorios',
                // [{text: 'Cancelar'}, {text: 'Aceptar'}]
            )
            return
        }

        //Revisar si es un registro nuevo o edición

        const nuevoPaciente={
            // id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        if(id){
            //Editando
            nuevoPaciente.id = id
            const pacientesActualizados = pacientes.map(pacienteState =>
            pacienteState.id === nuevoPaciente.id ? nuevoPaciente: pacienteState
            )
            setPacientes(pacientesActualizados)
            setPacienteApp({})
        }else{
            //Nuevo registro
            nuevoPaciente.id =Date.now()
            setPacientes([...pacientes, nuevoPaciente])
        }

   
        cerrarModal()
        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setFecha(new Date())
        setTelefono('')
        setSintomas('')
    }

  return (

    <Modal
    animationType='slide'
    visible={modalVisible}
    >
        <SafeAreaView style={styles.contenido}>
            <ScrollView>           
        <Text style={styles.titulo}>{pacienteObj.id ?
         'Editar': 'Agregar'} {''}
        <Text style={styles.tituloBold}>Cita</Text>        
        </Text>

        {/* Boton de cancelar */}
        <Pressable 
        style={styles.btnCancelar}
        onLongPress={()=>{
            cerrarModal()
            setPacienteApp({})
            setId('')
            setPaciente('')
            setPropietario('')
            setEmail('')
            setFecha(new Date())
            setTelefono('')
            setSintomas('')
        }}
        >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
        </Pressable>

        {/* Cada campo */}
        <View style={styles.campo}>
        <Text style={styles.label}>Nombre Paciente</Text>
        <TextInput
        style={styles.input}
        placeholder='Nombre Paciente'
        placeholderTextColor={'#666'}
        value={paciente}
        onChangeText={setPaciente} 

        />
        </View>


        <View style={styles.campo}>
        <Text style={styles.label}>Nombre Propietario</Text>
        <TextInput
        style={styles.input}
        placeholder='Nombre Propietario'
        placeholderTextColor={'#666'}
        value={propietario}
        onChangeText={setPropietario}
        />
        </View>

        <View style={styles.campo}>
        <Text style={styles.label}>Email Propietario</Text>
        <TextInput
        style={styles.input}
        placeholder='Email Propietario'
        placeholderTextColor={'#666'}
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
        />
        </View>

        <View style={styles.campo}>
        <Text style={styles.label}>Numero Propietario</Text>
        <TextInput
        style={styles.input}
        placeholder='Numero Propietario'
        placeholderTextColor={'#666'}
        keyboardType='number-pad'
        value={telefono}
        onChangeText={setTelefono}
        maxLength={8}
        />
        </View>

        <View style={styles.campo}>
        <Text style={styles.label}>Fecha Alta</Text>
        <DatePicker
        style={styles.fechaContenedor}
        date={fecha}
        locale= 'es'
        onDateChange={ (date) => setFecha(date)}
        />
        
        </View>

        <View style={styles.campo}>
        <Text style={styles.label}>Sintomas</Text>
        <TextInput
        style={[styles.input,styles.sintomasInput]}
        placeholder='Sintomas Paciente'
        placeholderTextColor={'#666'}
        value={sintomas}
        onChangeText={setSintomas}
        multiline={true}
        numberOfLines={4}
        />

        </View>

        {/* Ultimo boton */}
        <Pressable 
        style={styles.btnNuevaCita}
        onPress={handlerCita}
        >
            <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ?
         'Editar': 'Agregar'} {''}Paciente</Text>
        </Pressable>

        </ScrollView>
        </SafeAreaView>
      
    </Modal>
    )
  
};

const styles = StyleSheet.create({
    contenido: {
        backgroundColor:'#6D28D9',
        flex:1,
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
    btnCancelar:{
        marginTop: 20,
        backgroundColor: '#4827A4',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#FFF'
    },
    btnCancelarTexto:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    campo:{
        marginTop: 10,
        marginHorizontal:30,
       
    },

    label:{
        color:'#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize:20,
        fontWeight:'60'
    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius:10,
        color: '#000'
  
    },
    sintomasInput:{
        height:100
    },
    fechaContenedor:{
        backgroundColor:'#FFF',
        borderRadius: 10
    },
    btnNuevaCita:{
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical:15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto:{
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16

    },
});


export default Formulario;
