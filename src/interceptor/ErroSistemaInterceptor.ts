import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ErroSistemaInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        return httpHandler.handle(request).catch((error, caught) => {
            let errorResponse = error;
            if(errorResponse.error) {
                errorResponse = errorResponse.error;
            }
            if(!errorResponse.status) {
                errorResponse = JSON.parse(errorResponse);
            }
            console.log("INTERCEPTOR: ", errorResponse);
            return Observable.throw(errorResponse);
        }) as any;
    }

}

export const ErroSistemaInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErroSistemaInterceptor,
    multi: true
};