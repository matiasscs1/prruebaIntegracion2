import soap from 'soap';

const WSDL_URL = 'http://localhost:8080/?wsdl'; 

export async function registrarCertificacionSOAP(params) {
  try {
    const client = await soap.createClientAsync(WSDL_URL);
    // La operación se llama RegistrarCertificacion (igual que en el WSDL)
    const [result] = await client.RegistrarCertificacionAsync(params);
    return result;
  } catch (error) {
    console.error('Error llamando servicio SOAP:', error);
    throw error;
  }
}
