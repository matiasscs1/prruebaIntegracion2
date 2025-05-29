##### EXPLICACIÓN DE MI EXAMEN 

#### Diseño de arquitectura 

![arquitectura](/imagenes/Captura%20de%20pantalla%202025-05-28%20212226.png)

Este diseño involucra varios servicios comunicándose dentro de un **service mesh**, lo que permite manejar la comunicación, seguridad y resiliencia de manera centralizada y eficiente.

**a. Los servicios involucrados:**  
Son varios microservicios que cumplen funciones específicas dentro del sistema, incluyendo uno que se conecta a un servicio SOAP externo para obtener o enviar información.  

**b. El rol del API Gateway:**  
El API Gateway actúa como el punto de entrada principal para todas las solicitudes externas hacia los microservicios. Dentro del Gateway se implementa la validación del **JWT (JSON Web Token)**, lo que garantiza que solo las peticiones autenticadas y autorizadas puedan acceder a los recursos. Esto centraliza la seguridad y evita que cada microservicio tenga que gestionar autenticación.  

**c. El flujo entre componentes:**  
1. El cliente realiza una petición al API Gateway.  
2. El Gateway valida el JWT y, si es correcto, enruta la petición hacia el microservicio correspondiente.  
3. Si el microservicio necesita datos que provienen de un sistema legado o externo, se conecta vía **SOAP** para obtener la información necesaria.  
4. Toda la comunicación entre microservicios ocurre dentro del **service mesh**, que permite una gestión avanzada de tráfico y políticas.  

**d. Los puntos donde aplicarás Circuit Breaking, seguridad y trazabilidad:**  
- **Circuit Breaking:** Se aplica en las llamadas entre microservicios dentro del mesh para evitar que fallos en un servicio afecten al resto, mejorando la resiliencia. Por ejemplo, si el servicio SOAP externo está caído, el circuit breaker evita que se saturen las peticiones y permite manejar la falla con fallback o mensajes de error controlados.  
- **Seguridad:** Además de la validación de JWT en el API Gateway, dentro del service mesh se pueden aplicar políticas de seguridad para cifrar la comunicación (mTLS), y control de acceso entre servicios.  
- **Trazabilidad:** Se implementa con herramientas de tracing distribuidas (como Jaeger o Zipkin) para seguir el flujo de cada petición a través de los servicios, facilitando la detección de cuellos de botella y errores.  

---

### microserivicio creado y enviado a soap fotos 


- ![respuesta post](/imagenes/postamn%20pruebas.png)
- ![SOAP](/imagenes/conexion%20del%20soap.png)
- ![BD](/imagenes/subida%20del%20post%20base.png)
