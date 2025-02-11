import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomePageComponent implements OnInit {
  
  featuredProducts = [
    {
      id: 1,
      name: 'Casual T-Shirt',
      price: 29.99,
      image: 'assets/images/product1.jpg'
    },
    {
      id: 2,
      name: 'Denim Jeans',
      price: 59.99,
      image: 'assets/images/product2.jpg'
    },
    {
      id: 3,
      name: 'Summer Dress',
      price: 45.99,
      image: 'assets/images/product3.jpg'
    },
    {
      id: 4,
      name: 'Sports Shoes',
      price: 79.99,
      image: 'assets/images/product4.jpg'
    },
    {
      id: 5,
      name: 'Leather Bag',
      price: 89.99,
      image: 'assets/images/product5.jpg'
    },
    {
      id: 6,
      name: 'Watch',
      price: 129.99,
      image: 'assets/images/product6.jpg'
    }
  ];

  categoryCards = [
    {
      title: "Men's Collection",
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51nIfK1492L.jpg',
      link: '#'
    },
    {
      title: "Women's Collection",
      image: 'https://assets.ajio.com/medias/sys_master/root/20250206/Zefi/67a4d179bc78b543a9290fb3/-473Wx593H-466833334-white-MODEL.jpg',
      link: '#'
    },
    {
      title: "Kids' Collection",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjM2-IWan41Em3uvakldJFgnb9n9YjjaNMHw&s',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize carousel if needed
  }
}
