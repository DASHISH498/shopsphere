import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../core/services/product.service';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
