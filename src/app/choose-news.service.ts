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

  keyWordsSelected= [];
  public keyWords = [];

  constructor(private http: HttpClient) {
    this.keyWords = [
      { val: 'PUE', isChecked: false },
      { val: 'Energia', isChecked: false },
      { val: 'IT', isChecked: false },
      { val: 'Emisiones', isChecked: false },
      { val: 'Potencia', isChecked: false },
      { val: 'Ahorro', isChecked: false },
      { val: 'Gasto', isChecked: false },
      { val: 'Temperatura', isChecked: false },
      { val: 'Refrigeración', isChecked: false },
      { val: 'ERE', isChecked: false },
      { val: 'DCPE', isChecked: false }
     
    ];
   }
  getData(url){
    return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`)
  }
}
