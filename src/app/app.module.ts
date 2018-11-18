import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductShowComponent } from './Components/product-show/product-show.component';
import { AppRoutingModule } from './app-routing.module';
import { Err404Component } from './Components/err404/err404.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { SearchComponent } from './Components/search/search.component';
import { BoughtComponent } from './Components/bought/bought.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductShowComponent,
    ProductViewComponent,
    HomepageComponent,
    Err404Component,
    CartComponent,
    LoginComponent,
    UserInfoComponent,
    
    SignupComponent,
    
    AdminPageComponent,
    
    SearchComponent,
    
    BoughtComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
