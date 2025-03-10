import { Component, inject ,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  products : any[] = []

  ngOnInit() {
    this._ProductsService. getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.log(this.products);
      }
    })
    /********************************************************************* */
    const elements = document.querySelectorAll('.circle, .choise') as NodeListOf<HTMLElement>;

    elements.forEach(element => {
      element.addEventListener('click', () => {
        let targetCircle: HTMLElement | null = null;

        if (element.classList.contains('circle')) {

          targetCircle = element;
        } else if (element.classList.contains('choise')) {

          const relatedCircle = document.querySelector(`.circle[data-for="${element.id}"]`);
          if (relatedCircle) {
            targetCircle = relatedCircle as HTMLElement;
          }
        }

        if (targetCircle) {
          targetCircle.style.borderColor = '#1F8394';
          targetCircle.style.borderWidth = '2px';
        }
      });
    });
   }




  /*********************************************************** */
}

