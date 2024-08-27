import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
        
      const exceptionResponse = exception.getResponse();
      const error =
        typeof response === 'string'
          ? { message: exceptionResponse }
          : (exceptionResponse as object);
  
      response.status(status).json({
        message:error,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
  