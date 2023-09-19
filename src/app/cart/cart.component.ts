
import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../services/http.service';
import { Products } from '../interface/products';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: Products[] = [];

  counter !: number


  constructor(
    private cartService: HTTPService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.getCartItems(); 

    this.counterService.getCounterVal().subscribe((val) => this.counter = val)
    
  }

  getCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (products) => {
        this.product = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  increaseCounter(){
      this.counterService.setCounterVal(++this.counter)
    }
    
  decreaseCounter(){
    this.counterService.setCounterVal(--this.counter)
  }
  
  removeItem(product: any) {
    this.product = this.product.filter((item) => item !== product);
    this.cartService.setCartItems(this.product);
  }

  calculateTotal() {
    let total = 0;
    this.product.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total; 
  }
}


  

