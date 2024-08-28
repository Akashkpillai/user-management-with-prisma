import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp();
    const response = ctx.getResponse();
        return next.handle().pipe(map((data) => {
            // Checking if data is already in the expected format
            if (data && data.statusCode && data.status && data.message) {
                return data;
            }
            return {
                status: 'success',
                statusCode: response.statusCode,
                message: 'Operation completed successfully',
                data: data,
            }
        }))
    }
}