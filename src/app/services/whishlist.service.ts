import { Injectable } from '@angular/core';
import { AuthServiceService } from '../modules/Auth/auth-service.service';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from '../../Environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  baseUrl = environment.mockApi;


  // current user UID
  currentUser=this._auth.currentUser.value;
  // current user UID

  constructor(private _auth: AuthServiceService,private httpclient: HttpClient) {
     this._auth.currentUser.subscribe(
    value => {
      this.currentUser = value;
      }
    );
  }

  // add a wishlist
  // document for data
  // {
  // [{productId:123154mkmkl,count:0},..]
  // }
  // document for data

  addWishlist(data:any): Observable<any>{
    return this.httpclient.post(this.baseUrl + 'Wishlist',{userUID:this.currentUser,products:data})
  }
  // add a wishlist



  // get wishlist
  getWishlist(): Observable<any> {
    const No = of ('not found');
    let wishlistArray = this.httpclient.get(this.baseUrl + 'Wishlist');
    wishlistArray.forEach((el: any) => {
      if (this.currentUser == el.userUID) {
        return el;
      }
    })
    return No;
  }
  // get wishlist



    // get a wishlist by id
    getWishlistById(id:any): Observable<any>{
      return this.httpclient.get(this.baseUrl+`Wishlist/${id}`)
    }
  // get a wishlist by id

  // update a Wishlist
  updateWishlist(id: any, data: any) {
    return this.httpclient.put(this.baseUrl+`Wishlist/${id}`,{userUID:this.currentUser,products:data})
  }
  // update a Wishlist

  // delet a wishlist
  deleteWishlist(id: any) {
    return this.httpclient.delete(this.baseUrl+`Wishlist/${id}`)
  }
  // delet a wishlist

}
