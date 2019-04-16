import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from'./Post';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { 
    console.log('service data working');
  }
  getData(enlace:string){
    return this.httpClient.get<Post[]>(enlace);
  }
}
