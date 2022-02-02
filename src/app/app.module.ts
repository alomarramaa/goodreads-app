import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TopNavBarComponent} from 'src/app/driver/topnavbar.component';
import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { footerComponent } from './driver/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    footerComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
