import { Component } from '@angular/core';
import { ProductService, Product } from '../../core/services/product.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {

  products: Product[] = [];
  
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

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
}
