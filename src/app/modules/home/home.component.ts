import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
