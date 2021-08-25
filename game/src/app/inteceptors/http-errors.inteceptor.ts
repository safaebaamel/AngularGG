import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpErrorsInteceptor implements HttpInterceptor {

    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((err: any) => {
                console.log(err);
                return throwError(err);
            })
        )
    } 
}



