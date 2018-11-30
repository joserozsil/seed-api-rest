'use strict'

/**
 * @description: método para rutas no encontradas
 * @return 404 Not Found
 * @author: José Rodríguez @joserozsil
 */
function notFound(req, res, next)  {
  return res.status(404).json({
    message: 'No hemos encontrado la ruta solicitada'
  });
}

/**
 * @description: manejador de errores en stack
 * @return 500 error
 * @author: José Rodríguez @joserozsil
 */
function handleError(error, req, res, next)  {
  if (error) {
    return res.status(500).json({
      message: 'Error en servidor',
      error
    });
  } else {
    next();
  }
}

module.exports = {
  notFound,
  handleError
}