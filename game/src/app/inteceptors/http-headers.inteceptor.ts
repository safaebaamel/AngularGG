import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpHeadersInteceptor implements HttpInterceptor {

    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'fe341b7f54mshadfdfb10efd3fb6p12b135jsnc3bbec8a1e35',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'b73724acbdba4831a991d158f1a00e96',
            }
        });
        return next.handle(req);
    } 
}