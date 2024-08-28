import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class SanitizeUserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(map((data)=>{
            if(Array.isArray(data)){
                return data.map(({password,...user}) => user)
            }else{
                const {password,...user} = data
                return user
            }
        }))
    }
}