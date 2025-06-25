import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class servicesService {

  constructor(private http: HttpClient) { }

  registerServicio (newServicio:any) {
    return this.http.post('http://localhost:3000/api/servicios',newServicio )
  }
}
