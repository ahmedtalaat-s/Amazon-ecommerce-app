import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  products: any[] = [];
  allProducts: any[] = [];

  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.allProducts = response;
        console.log(this.products);
      }
    });

    this._ProductsService.getBrands().subscribe({
      next: (response) => {
        console.log(response);
      }
    });

    this.addFilterEventListeners();

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
          document.querySelectorAll('.circle').forEach(circle => {
            (circle as HTMLElement).style.borderColor = '#ddd'; 
          });

          targetCircle.style.borderColor = '#1F8394';
          targetCircle.style.borderWidth = '2px';
        }

        if (element.id === 'all') {
          this.products = [...this.allProducts];
          console.log('All products displayed.');
        }
      });
    });
  }

  addFilterEventListeners() {
    const brandElements = document.querySelectorAll('.brands .choise') as NodeListOf<HTMLElement>;

    brandElements.forEach(element => {
      element.addEventListener('click', () => {
        const selectedBrand = element.innerText.trim();
        this.filterByBrand(selectedBrand);
      });
    });
  }

  filterByBrand(brand: string) {
    this._ProductsService.FilterByBrand(brand).subscribe({
      next: (filteredProducts) => {
        this.products = filteredProducts;
        console.log(`Filtered Products for ${brand}:`, this.products);
      }
    });
  }
}
