import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './no-navbar.component.html',
  styleUrl: './no-navbar.component.css'
})
export class NoNavbarComponent {

}
