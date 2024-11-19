import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = "http://localhost:3000/products"

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}`)
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
}
