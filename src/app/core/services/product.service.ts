
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 10,
      stock: 50,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Cotton T-Shirt',
      category: 'Clothing',
      price: 15,
      stock: 30,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      category: 'Home',
      price: 20,
      stock: 20,
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Yoga Mat',
      category: 'Sports',
      price: 25,
      stock: 10,
      status: 'Active'
    },
    {
      id: 5,
      name: 'Python Programming Book',
      category: 'Books',
      price: 30,
      stock: 5,
      status: 'Inactive'
    },
    {
      id: 6,
      name: 'Mouse',
      category: 'Electronics',
      price: 25,
      stock: 15,
      status: 'Active'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
