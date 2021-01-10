import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_LOCAL } from '../config/API';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    constructor(private http:HttpClient) { }

    getServices() {
      let endpoint = API_URL_LOCAL + '/servicios';
      return this.http.get(endpoint);
    }

}
