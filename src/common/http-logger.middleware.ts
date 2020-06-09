import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const request = {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      body: req.body,
    };
    Logger.log(JSON.stringify(request), "Request");
    
    next();

    const response = {
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
    };
    Logger.log(JSON.stringify(response), "Response");
  }
}
