import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  /*
  Necessary for all browser apps
  */
  imports: [
    BrowserModule,
    FormsModule
  ],
  /** 
   * startup component which contains selector
   * to display in html, in this case
   * <pm-root> in AppComponent
   * */
  bootstrap: [AppComponent] 
  
})
export class AppModule { }
