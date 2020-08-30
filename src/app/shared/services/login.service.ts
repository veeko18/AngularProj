import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGIN_BASE_URL = 'login';
  constructor(httpClient: HttpClient) { }
 //set up login service
  public validateLogin(private login: login){
    return this.httpClient.post<Login> (this.LOGIN_BASE_URL, login);
  }
}
