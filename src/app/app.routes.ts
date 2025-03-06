import { Routes } from '@angular/router';
import { WithNavbarComponent } from './layout/with-navbar/with-navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { AllProductsComponent } from './modules/all-products/all-products.component';
import { SingleProductComponent } from './modules/single-product/single-product.component';
import { NotFound404Component } from './shared/not-found-404/not-found-404.component';
import { RegisterComponent } from './modules/Auth/register/register.component';
import { SignInComponent } from './modules/Auth/sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent , title:'Register'},
  {path:'signin',component:SignInComponent , title:'Sign In'},
  {
    path: '', component: WithNavbarComponent, children: [
      { path: '', redirectTo:'home',pathMatch:'full',title:'Home' },
      { path: 'home', component: HomeComponent,title:'Home' },
      {path:'allproducts',component:AllProductsComponent, title:'All Products'},
      {path:'product',component:SingleProductComponent , title:'Details'},
      {path:'**',component:NotFound404Component,title:'Not Found'},
    ]
  },


];
