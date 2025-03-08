import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.mockApi;

  constructor(private httpclient: HttpClient) { }

  // get all products
  getAllProducts(): Observable<any>{
    return this.httpclient.get(this.baseUrl+'allproducts')
  }
  // get all products

  // get a product by id
  getProductById(id:any): Observable<any>{
    return this.httpclient.get(this.baseUrl+`allproducts/${id}`)
  }
  // get a product by id
}
