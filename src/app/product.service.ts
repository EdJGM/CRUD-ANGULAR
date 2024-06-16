import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    generateId(products: Product[]): number {
        return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    getProduct(id: any): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}