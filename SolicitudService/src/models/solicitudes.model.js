// models/Solicitud.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SolicitudSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    estudianteId: {
        type: String,
        required: true
    },
    fecha: {
        type: Date, default: Date.now
    },
    estado: {
        type: String,
        enum: ['procesado', 'en revisión', 'rechazado'],
        default: 'en revisión'
    },
    detalles: {
        type: Object

    },
    resultadoCertificacion: {

        type: String
    }
});

export default model('Solicitudes', SolicitudSchema);
