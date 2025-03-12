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
    this.addPriceFilterEventListeners();
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

  addPriceFilterEventListeners() {
    const priceElements = document.querySelectorAll('.select .choise') as NodeListOf<HTMLElement>;

    priceElements.forEach(element => {
      element.addEventListener('click', () => {
        this.filterByPrice(element.id);
        this.updateCircleBorder(element.id);
      });
    });
  }

  filterByPrice(priceId: string) {
    if (priceId === 'price-2') {
      this.products = [
        this.allProducts[1], this.allProducts[3], this.allProducts[4],
        this.allProducts[5], this.allProducts[6], this.allProducts[7],
        this.allProducts[8], this.allProducts[9], this.allProducts[11],
        this.allProducts[12]
      ];
    } else if (priceId === 'price-4') {
      this.products = [
        this.allProducts[2], this.allProducts[10]
      ];
    } else if (priceId === 'price-1' || priceId === 'price-3') {
      this.products = []; 
    } else if (priceId === 'all') {
      this.products = [...this.allProducts];
    }
    console.log(`Filtered products for ${priceId}:`, this.products);
  }

  updateCircleBorder(selectedId: string) {
    document.querySelectorAll('.circle').forEach(circle => {
      (circle as HTMLElement).style.borderColor = '#ddd';
    });

    const targetCircle = document.querySelector(`.circle[data-for="${selectedId}"]`) as HTMLElement;
    if (targetCircle) {
      targetCircle.style.borderColor = '#1F8394';
      targetCircle.style.borderWidth = '2px';
    }
  }
}
