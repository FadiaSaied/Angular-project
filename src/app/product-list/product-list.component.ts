import { Component } from '@angular/core';
import { Products } from '../interface/products';
import { HTTPService } from '../services/http.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  product  : any;

 


  constructor(private productService: HTTPService) {}
  ngOnInit() {  
    this.productService.getProductList().subscribe(
   (data) => (this.product = data),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }
 
} 
