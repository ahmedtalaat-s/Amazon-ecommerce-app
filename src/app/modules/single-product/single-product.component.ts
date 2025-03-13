import { Component , Input, input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})


export class SingleProductComponent implements OnInit {
  @Input() product: any; 
  ActivatedRoute: any;
  private _Product: any;
  _ProductService: any;

  constructor (private_productservice: ProductsService ){
    this.product = this.ActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this._Product = this._ProductService. getProductById() .subscribe ({
      next: (Response: any) => {
        this._Product = Response ;
      }
    });
    
  }




}
