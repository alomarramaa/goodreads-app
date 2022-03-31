import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TopNavBarComponent} from 'src/app/driver/topnavbar.component';
import { AppComponent } from './app.component';
import { HorizontalCardComponent } from './books/horizontal.card.component';
import { VerticalCardComponent } from './books/vertical.card.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { footerComponent } from './driver/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowseRecommendationsLayoutComponent } from './books/browse-recommendations-layout.component';
import { HomeLayoutComponent } from './books/home-layout.component';
import { BrowseChoiceAwardsComponent } from './books/browse-choice-awards.component';
import { MyBooksComponent } from './books/my-books.component';
import { BrowseGiveawaysComponent } from './books/browse-giveaways.component';
import { GiveawayCardComponent } from './books/giveaway.card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddProductComponent } from './books/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    footerComponent,
    CategoryCardComponent, 
    VerticalCardComponent,
    HorizontalCardComponent,
    BrowseRecommendationsLayoutComponent,
    HomeLayoutComponent,
    BrowseChoiceAwardsComponent,
    MyBooksComponent,
    BrowseGiveawaysComponent,
    GiveawayCardComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
