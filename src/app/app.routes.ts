import { Routes } from '@angular/router';
import { WithNavbarComponent } from './layout/with-navbar/with-navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { AllProductsComponent } from './modules/all-products/all-products.component';
import { SingleProductComponent } from './modules/single-product/single-product.component';
import { NotFound404Component } from './shared/not-found-404/not-found-404.component';
import { RegisterComponent } from './modules/Auth/register/register.component';
import { SignInComponent } from './modules/Auth/sign-in/sign-in.component';
import { NoNavbarComponent } from './layout/no-navbar/no-navbar.component';

export const routes: Routes = [
      { path: '', redirectTo:'home',pathMatch:'full' },

{
    path: '', component: NoNavbarComponent, children: [
      { path: 'register', component: RegisterComponent,title:'Register' ,pathMatch:'full' },
  {path:'signin',component:SignInComponent,title:'Sign in' ,pathMatch:'full'}
  ]},

  {
    path: '', component: WithNavbarComponent, children: [
      { path: 'home', component: HomeComponent,title:'Home' },
      {path:'allproducts',component:AllProductsComponent, title:'All Products',pathMatch:'full'},
      {path:'product',component:SingleProductComponent , title:'Details',pathMatch:'full'},
      {path:'**',component:NotFound404Component,title:'Not Found',pathMatch:'full'},
    ]
  }

];
