import Solicitud from '../models/solicitudes.model.js';

import { registrarCertificacionSOAP } from './soapClient.js';

export const crearSolicitud = async (req, res) => {
  try {
    const { tipo, estudianteId, detalles } = req.body;

    if (!tipo || !estudianteId) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Preparar los parámetros que espera el SOAP
    const params = {
      estudianteId,
      tipo,
      // agrega más campos si tu WSDL los requiere
    };

    // Llamar al servicio SOAP
    const respuestaSOAP = await registrarCertificacionSOAP(params);
    console.log('Respuesta del SOAP:', respuestaSOAP);

    // Extraer el estado que devuelve el SOAP (ajusta según la estructura real)
    const estado = respuestaSOAP?.estado || 'en revisión';

    // Crear la solicitud con el estado retornado por el SOAP
    const nuevaSolicitud = new Solicitud({
      tipo,
      estudianteId,
      detalles,
      estado,
      resultadoCertificacion: estado,
    });

    await nuevaSolicitud.save();

    return res.status(201).json({
      message: 'Solicitud creada',
      solicitud: nuevaSolicitud,
    });
  } catch (error) {
    console.error('Error crear solicitud:', error);
    return res.status(500).json({ error: 'Error interno' });
  }
};


// Obtener solicitud por id
export const obtenerSolicitudPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const solicitud = await Solicitud.findById(id);
    if (!solicitud) return res.status(404).json({ error: 'Solicitud no encontrada' });

    return res.json(solicitud);
  } catch (error) {
    console.error('Error obtener solicitud:', error);
    return res.status(500).json({ error: 'Error interno' });
  }
};
