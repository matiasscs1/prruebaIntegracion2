import express from 'express';
import { crearSolicitud, obtenerSolicitudPorId } from '../controller/solicitudes.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = express.Router();

// Protegemos las rutas con validarJWT
router.post('/solicitudes', authRequired, crearSolicitud);
router.get('/solicitudes/:id', authRequired, obtenerSolicitudPorId);

export default router;
