import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL= environment.apiUrl;
const API_KEY= environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class ChooseNewsService {
  datos;
  data1;
  data2;
  data3;
  tipoNoticia;
  constructor(private http: HttpClient) {

   }
  getData(url){
    return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`)
  }
}
