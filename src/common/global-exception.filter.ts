import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

interface ErrorDetails {
  code: HttpStatus;
  message: string;
  details?: ErrorDetails[];
}

interface ErrorResponse {
  error: ErrorDetails;
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();    

    Logger.error('GlobalExceptionFilter', exception.stack);

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
    } else if (exception.isAxiosError && exception.response?.status) {
      status = exception.response.status;
    }

    let errorResponse: ErrorResponse;
    if (status === HttpStatus.UNAUTHORIZED) {
      errorResponse = {
        error: {
          code: status,
          message: 'Unauthorized'
        }
      };
    }
    else if (status === HttpStatus.FORBIDDEN) {
      errorResponse = {
        error: {
          code: status,
          message: 'Forbidden'
        }
      };
    }
    else if (status === HttpStatus.NOT_FOUND) {
      errorResponse = {
        error: {
          code: status,
          message: 'Not Found'
        }
      };
    }
    else if (status === HttpStatus.BAD_REQUEST) {
      errorResponse = {
        error: {
          code: status,
          message: 'Bad Request'
        }
      };
    }
    else {
      errorResponse = {
        error: {
          code: status,
          message: 'Internal Server Error'
        }
      };
    }
    return response.status(status).json(errorResponse);
  }
}
