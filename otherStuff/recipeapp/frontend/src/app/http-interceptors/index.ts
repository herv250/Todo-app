import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "../user/authentication.service";
import { AuthentificationInterceptor } from './AuthentificationInterceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthentificationInterceptor,
        multi: true
    }
];