import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API:string = "http://localhost:5000/api"

  selectedProduct: Product = {
    _id: '',
    name: '',
    price: '',
    category: '',
    brand: '',
    imgUrl: ''
  }

  products:Product[]

  constructor(private http: HttpClient) { }

  /* Conexiones con el api
  
    Estas son las conexiones que concatenan
    la url para conectarse al backend
  
  */

  getProducts(){
    return this.http.get<Product[]>(this.URL_API)
  }

  getProductsByPrice(){
    return this.http.get<Product[]>(`${this.URL_API}/price`)
  }

  getProductsByDate(){
    return this.http.get<Product[]>(`${this.URL_API}/date`)
  }

  createProduct(product: Product){
    return this.http.post(this.URL_API, product)
  }

  deleteProduct(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateProduct(product: Product){
    return this.http.put(`${this.URL_API}/${product._id}`, product)
  }
}
