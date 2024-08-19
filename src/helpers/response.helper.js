export function successResponse(res, data, message = 'Success', statusCode = 200) {
    res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  }
  
  export function errorResponse(res, error, message = 'Error', statusCode = 400) {
    res.status(statusCode).json({
      status: 'error',
      message,
      error: error.message || error,
    });
  }
  