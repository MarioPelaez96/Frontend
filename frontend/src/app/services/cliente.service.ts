import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/clientes/`
  constructor(
    private http:HttpClient
  ) { }

  getAllCliente():Observable<{clientes:ClienteI[]}>{
    return this.http
      .get<{clientes:ClienteI[]}>(this.base_path)
  }

  getOneCliente():Observable<{clientes:ClienteI[]}>{
    return this.http
      .get<{clientes:ClienteI[]}>(this.base_path)
  }

  createCliente(data: any):Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path, data)
  }

  updateCliente(id: number, data: any): Observable<ClienteI> {
    return this.http.put<ClienteI>(`${this.base_path}/${id}`, data);
  }

  deleteCliente(id: number): Observable<ClienteI> {
    return this.http.delete<ClienteI>(`${this.base_path}${id}`);
  }


}
