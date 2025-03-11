import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  // get brands

  getBrands(): Observable<string[]> {
  return this.getAllProducts().pipe(
    map((res) => { // Transform the response
      let Brands: string[] = [];
      res.forEach((product: any) => {
        if (!Brands.includes(product.brand)) {
          Brands.push(product.brand);
        }
      });
      return Brands; // Returns the unique brands array
    })
  );
}


  // get brands


  // filter by brand
  FilterByBrand(Brand:string):Observable<any> {
    return this.getAllProducts().pipe(
      map((res) => {
      let filteredProducts: any = [];
        res.forEach((product:any) => {
          if (product.brand === Brand) {
            filteredProducts.push(product)
          }
        });
        return filteredProducts;
      })
    )
  }
  // filter by brand

  // search products
  searchBy(input:string):Observable<any> {
    return this.getAllProducts().pipe(
      map((res) => {
      let filteredProducts: any = [];
        res.forEach((product:any) => {
          if (product.title.includes(input)) {
            filteredProducts.push(product)
          }
        });
        return filteredProducts;
      })
    )
  }
  // search products
}
