import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "./token-storage.service";


@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.tokenService.getToken();
    console.log("on intercepter");
console.log(token);
if(token!=null)
      authReq = req.clone({
         setHeaders: {
          "Authorization":"Bearer " +token
          }
        });
      
        this.addHeader(authReq)
    return next.handle(authReq);
    
  }
 
  
  private addHeader(request: HttpRequest<any>) {

    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
       
      }
    });

    return request;
  }
  
}
