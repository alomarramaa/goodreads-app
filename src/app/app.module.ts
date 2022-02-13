import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TopNavBarComponent} from 'src/app/driver/topnavbar.component';
import { AppComponent } from './app.component';
import { HorizontalCardComponent } from './books/horizontal.card.component';
import { VerticalCardComponent } from './books/vertical.card.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { footerComponent } from './driver/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    footerComponent,
    CategoryCardComponent,
    VerticalCardComponent,
    HorizontalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
