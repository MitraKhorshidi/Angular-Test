import { Injectable ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseUrl :string = 'https://fakestoreapi.com';

  constructor(private httpClient :HttpClient) { }

  getAllProducts(limit:number=5):Observable<Product[]>{
    const url:string = `${this.baseUrl}/products?limit=${limit}`;
    return this.httpClient.get<Product[]>(url);
  }

  createProduct(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/products`;
    return this.httpClient.post<Product>(url,product);
  }
}
