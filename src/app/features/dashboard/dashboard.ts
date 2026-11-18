import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  stats = [
    {
      title: 'Total Products',
      value: 1250,
      icon: 'bi-box-seam',
      color: 'purple'
    },
    {
      title: 'Total Orders',
      value: 850,
      icon: 'bi-cart-check',
      color: 'blue'
    },
    {
      title: 'Total Revenue',
      value: '$24,500',
      icon: 'bi-currency-dollar',
      color: 'green'
    },
    {
      title: 'Low Stock',
      value: 18,
      icon: 'bi-exclamation-circle',
      color: 'orange'
    }
  ];
  
  products = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: '$10', stock: 50, status: 'Active' },
    { id: 2, name: 'Cotton T-Shirt', category: 'Clothing', price: '$15', stock: 30, status: 'Active' },
    { id: 3, name: 'Coffee Maker', category: 'Home', price: '$20', stock: 20, status: 'Inactive' },
    { id: 4, name: 'Yoga Mat', category: 'Sports', price: '$25', stock: 10, status: 'Active' },
    { id: 5, name: 'Python Programming Book', category: 'Books', price: '$30', stock: 5, status: 'Inactive' }
  ];
}
