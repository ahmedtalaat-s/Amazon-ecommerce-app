import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  ngOnInit() {
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
}

