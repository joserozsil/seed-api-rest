### Seed Api Rest

Copyright. 2018. Todos los derechos reservadors.
Node module: seed-api-rest
Licencia MIT
Para ver más sobre la licencia: https://opensource.org/licenses/MIT
Author: José Rodríguez <https://github.com/joserozsil>

*Estructura del proyecto*

```
- config        | configuración global del proyecto
- controllers   | funciones de endpoint
- middlewares   | middlewares
- models        | estructura de colecciones
- routes        | rutas de la aplicación
- utils         | utilidades generaless
```

*Variables de entorno*

```
- MONGO_URL | DEFAULT: mongodb://localhost:27017/my-db  | Url de Bd
- SECRET    | DEFAULT: MY SECRET KEY                    | Llave de secreta
- ORIGIN    | DEFAULT: *                                | Origen de peticiones
- PORT      | DEFAULT: 3001                             | Puerto de Api Rest
- LIMIT     | DEFAULT: 100                              | Límite de 
- MODE      | DEFAULT: MODE, PROD                       | Modo de ejecución
```