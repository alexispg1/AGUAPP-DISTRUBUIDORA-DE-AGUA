import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_LOCAL } from '../config/API';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

    constructor(private http:HttpClient) { }

    getRepartidores(like:string) {
        let endpoint = `/repartidores?like=${like}`;
        return this.http.get(API_URL_LOCAL+endpoint);
    }

}
