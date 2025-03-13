import { Component } from '@angular/core';
import { WhishlistService } from '../../services/whishlist.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css'
})
export class WhishlistComponent {
  constructor(private _wishlistServises: WhishlistService) {
  }
  ngOnInit(): void{

  }
}
