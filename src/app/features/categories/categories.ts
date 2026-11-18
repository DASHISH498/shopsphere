import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {

  categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
      description: 'Electronic devices and accessories',
      productCount: 24
    },
    {
      id: 2,
      name: 'Clothing',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
      description: 'Fashion and apparel products',
      productCount: 36
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600',
      description: 'Home decor and kitchen essentials',
      productCount: 18
    },
    {
      id: 4,
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
      description: 'Sports and fitness equipment',
      productCount: 15
    },
    {
      id: 5,
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600',
      description: 'Books and educational materials',
      productCount: 12
    }
  ];
}