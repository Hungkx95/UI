import { NgModule } from '@angular/core';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './Components/err404/err404.component';
import { CartComponent } from './Components/cart/cart.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { BoughtComponent } from './Components/bought/bought.component';
import { SearchComponent } from './Components/search/search.component';



const routes: Routes = [
  { path: 'view/:id', component: ProductViewComponent },
  { path:'home',component: HomepageComponent},
  { path:'cart',component:CartComponent},
  { path:'user/:id',component:UserInfoComponent},
  { path: 'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'admin',component:AdminPageComponent },
  { path:'bought/:id',component:BoughtComponent},
  { path:'search',component:SearchComponent},






  { path:'',redirectTo: '/home', pathMatch: 'full' },
  //error de cuoi cung
  { path:'**',component:Err404Component},
  
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
