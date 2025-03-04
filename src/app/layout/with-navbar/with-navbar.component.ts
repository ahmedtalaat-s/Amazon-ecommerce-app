import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-with-navbar',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './with-navbar.component.html',
  styleUrl: './with-navbar.component.css'
})
export class WithNavbarComponent {

}
