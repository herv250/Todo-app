import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CHECK_USERNAME_AVAILABILITY, CheckUsernameAvailabilityResponse } from './query';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  constructor(private http: HttpClient, private apollo: Apollo) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.username);
  }      

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`/users/login`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }  
  
  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`/graphql/users/register`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this._user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }


  checkUserNameAvailability(username: string) :Observable<boolean>{
    return this.http.post(`users/checkusername`, { username }).pipe(
      map((item: any) => {
        if (item.username === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
    /*let available;
    this.apollo
      .watchQuery<CheckUsernameAvailabilityResponse>({
      query: CHECK_USERNAME_AVAILABILITY,
      variables: {
        username
      }
    }).valueChanges.pipe(
        map(({data})  => {
          console.log('datat', data);
          if (data.CheckUsernameAvailability) {
            available = true;
          } else {
            available = false;
          }
        })
    );
    //console.log('fff', ffff);
    return available;*/
  }

}

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
