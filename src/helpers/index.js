export const formateaFecha = fecha =>{
    const nuevaFecha = new Date(fecha)
    const opciones = {
        weekday: 'long',
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-Es', opciones)
}

