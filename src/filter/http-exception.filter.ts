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
    let errorResponse: any

    // Formatting the exception response
    if (typeof exceptionResponse === 'string') {
      errorResponse = { message: exceptionResponse };
    } else if (typeof exceptionResponse === 'object') {
      errorResponse = exceptionResponse as { message?: string; error?: string };
      errorResponse.message = errorResponse.message || 'An unexpected error occurred';
    } else {
      errorResponse = { message: 'An unexpected error occurred' };
    }

    response.status(status).json({
      ...errorResponse,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
