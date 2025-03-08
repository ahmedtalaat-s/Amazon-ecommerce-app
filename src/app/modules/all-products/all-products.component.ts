import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  constructor(private productsServises: ProductsService) { }

  ngOnInit(): void{
    this.productsServises.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);

      }
    })
  }
}
