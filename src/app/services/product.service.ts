import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = 'http://localhost:3000';  
  
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    console.log('Getting products');
    return this.http.get<Produit[]>(`${this.baseUrl}/products`);
  }

  addProduct(product: Produit) {
    return this.http.post<Produit>(`${this.baseUrl}/products`, product);
  }

  getProductById(id: number | null) {
    return this.http.get<Produit>(`${this.baseUrl}/products/${id}`);
  }

  updateProduct(product: Produit | undefined) {
    return this.http.put<Produit>(`${this.baseUrl}/products/${product?.id}`, product);
  }
  
  deleteProduct(id: string | null) {
    console.log('Deleting product');
    console.log(`EXEMPLE: ${this.baseUrl}/products/${id}`);
    return this.http.delete(`${this.baseUrl}/products/${id!}`);
  }
    
}
