import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../interface/products';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],  
})

export class ProductDetailsComponent {
  product  : any;

  constructor(
    private activeRoute: ActivatedRoute,
    private productServices: HTTPService
  ) {}


  ngOnInit() {  
    this.activeRoute.snapshot['params']['id'];
    this.productServices.getProductDetails(5).subscribe(
   (data) => (this.product = data),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }
 
} 



 