import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-customers',
  styleUrl: './customers.scss',
  templateUrl: './customers.html',
})
export class Customers {

  customers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      phone: '+91 9876543210',
      location: 'Jaipur, India',
      orders: 12,
      spent: 1250,
      status: 'Active',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priya@gmail.com',
      phone: '+91 9876543211',
      location: 'Delhi, India',
      orders: 8,
      spent: 850,
      status: 'Active',
      image: 'https://i.pravatar.cc/150?img=47'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      phone: '+91 9876543212',
      location: 'Mumbai, India',
      orders: 3,
      spent: 240,
      status: 'Inactive',
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      id: 4,
      name: 'Neha Verma',
      email: 'neha@gmail.com',
      phone: '+91 9876543213',
      location: 'Pune, India',
      orders: 15,
      spent: 1850,
      status: 'Active',
      image: 'https://i.pravatar.cc/150?img=44'
    },
    {
      id: 5,
      name: 'Vikas Gupta',
      email: 'vikas@gmail.com',
      phone: '+91 9876543214',
      location: 'Jaipur, India',
      orders: 1,
      spent: 95,
      status: 'Inactive',
      image: 'https://i.pravatar.cc/150?img=13'
    },
    {
      id: 6,
      name: 'Anjali Mehta',
      email: 'anjali@gmail.com',
      phone: '+91 9876543215',
      location: 'Bangalore, India',
      orders: 20,
      spent: 3100,
      status: 'Active',
      image: 'https://i.pravatar.cc/150?img=45'
    }
  ];

  get totalCustomers() {
    return this.customers.length;
  }

  get activeCustomers() {
    return this.customers.filter(customer => customer.status === 'Active').length;
  }

  get inactiveCustomers() {
    return this.customers.filter(customer => customer.status === 'Inactive').length;
  }

  get newCustomers() {
    return 2;
  }

}
