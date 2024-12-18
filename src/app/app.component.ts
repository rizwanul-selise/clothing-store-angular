import { Component,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'e-commerce';
  @ViewChild('carousel') carousel!: ElementRef;
  scrollInterval: any;
  autoScrollSpeed = 2; // Adjust the speed of the automatic scroll

  products = [
    { name: 'Product 1', price: '$120', category: 'Shirts', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 2', price: '$150', category: 'T-Shirts', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 3', price: '$100', category: 'Jackets', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 4', price: '$80', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 5', price: '$200', category: 'Coats', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 7', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' },
    { name: 'Product 8', price: '$200', category: 'Jeans', discount: 'Black Friday 50% Off', image: '../assets/baner-right-image-01.jpg' }
  ];
  cart: any[] = [];
  ngAfterViewInit() {
    this.startAutoScroll();
  }

  // Automatically scroll the carousel
  startAutoScroll() {
    this.stopAutoScroll(); // Clear any existing interval
    this.scrollInterval = setInterval(() => {
      const container = this.carousel.nativeElement;
      container.scrollLeft += this.autoScrollSpeed;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; // Reset to the beginning for looping effect
      }
    }, 10); // Adjust for smoother or faster animation
  }

  // Stop the automatic scrolling
  stopAutoScroll() {
    clearInterval(this.scrollInterval);
  }

  // Scroll manually to the left
  scrollLeft() {
    this.stopAutoScroll();
    const container = this.carousel.nativeElement;
    container.scrollLeft -= 300; // Adjust scroll distance as needed
  }

  // Scroll manually to the right
  scrollRight() {
    this.stopAutoScroll();
    const container = this.carousel.nativeElement;
    container.scrollLeft += 300; // Adjust scroll distance as needed
  }
  addToCart(product: any) {
    this.cart.push(product);
    console.log('Product added to cart:', product);
  }
}
