import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-orders',
  styleUrl: './orders.scss',
  templateUrl: './orders.html',
})
export class Orders {

  orders = [
    {
      id: 'ORD-1001',
      customer: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      date: '18 Nov 2026',
      amount: 120,
      payment: 'Paid',
      status: 'Delivered'
    },
    {
      id: 'ORD-1002',
      customer: 'Priya Singh',
      email: 'priya@gmail.com',
      date: '17 Nov 2026',
      amount: 85,
      payment: 'Pending',
      status: 'Pending'
    },
    {
      id: 'ORD-1003',
      customer: 'Amit Kumar',
      email: 'amit@gmail.com',
      date: '16 Nov 2026',
      amount: 240,
      payment: 'Paid',
      status: 'Processing'
    },
    {
      id: 'ORD-1004',
      customer: 'Neha Verma',
      email: 'neha@gmail.com',
      date: '15 Nov 2026',
      amount: 150,
      payment: 'Paid',
      status: 'Shipped'
    },
    {
      id: 'ORD-1005',
      customer: 'Vikas Gupta',
      email: 'vikas@gmail.com',
      date: '14 Nov 2026',
      amount: 95,
      payment: 'Failed',
      status: 'Cancelled'
    },
    {
      id: 'ORD-1006',
      customer: 'Anjali Mehta',
      email: 'anjali@gmail.com',
      date: '13 Nov 2026',
      amount: 310,
      payment: 'Paid',
      status: 'Delivered'
    },
    {
      id: 'ORD-1007',
      customer: 'Rohit Joshi',
      email: 'rohit@gmail.com',
      date: '12 Nov 2026',
      amount: 180,
      payment: 'Paid',
      status: 'Processing'
    },
    {
      id: 'ORD-1008',
      customer: 'Sanya Kapoor',
      email: 'sanya@gmail.com',
      date: '11 Nov 2026',
      amount: 220,
      payment: 'Paid',
      status: 'Shipped'
    }
  ];
  get totalOrders() {
    return this.orders.length;
  }

  get pendingOrders() {
    return this.orders.filter(order => order.status === 'Pending').length;
  }

  get completedOrders() {
    return this.orders.filter(order => order.status === 'Delivered').length;
  }

  get cancelledOrders() {
    return this.orders.filter(order => order.status === 'Cancelled').length;
  }
}
