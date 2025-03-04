import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-with-navbar',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './with-navbar.component.html',
  styleUrl: './with-navbar.component.css'
})
export class WithNavbarComponent {

}
