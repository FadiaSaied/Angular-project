import { Component, Input } from '@angular/core';
import { Products } from '../interface/products';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent { 
  @Input() product!: Products;

  counter: number = 0;
  constructor(
    private router: Router,
    private counterService: CounterService,
    cartService: HTTPService
  ) {}

  ngOnInit() {
    this.counterService
      .getCounterVal()
      .subscribe((val) => (this.counter = val));
  }

  increaseCounter() {
    this.counterService.setCounterVal(++this.counter);
  } 

  goTODetails(id: number) {
    this.router.navigate(['product-details', id]);
  }
}
