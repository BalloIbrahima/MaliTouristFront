import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private env=environment;

  constructor(private http:HttpClient) { }

  login(username:String, password:any):Observable<any>{

    //const data:FormData=new FormData();

    const user={"password": password,"username": username}

    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    // data.append('client', JSON.stringify(client).slice(1,JSON.stringify(client).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/login`,user,httpOptions);
  }


  create(admin:any):Observable<any>{

    return this.http.post(`${this.env.api}/admin/creer`,admin,httpOptions);
  }

  //liste des admins
  listeAdmin():Observable<any>{
    return this.http.get(`${this.env.api}/admin/liste`);
  }

  //Deconnexion
  Deconnecter():Observable<any>{
    return this.http.post(`${this.env.api}/logout`,null);
  }
}
