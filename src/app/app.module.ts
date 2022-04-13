import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TopNavBarComponent} from 'src/app/driver/topnavbar.component';
import { AppComponent } from './app.component';
import { HorizontalCardComponent } from './books/horizontalCard/horizontal.card.component';
import { VerticalCardComponent } from './books/verticalCard/vertical.card.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { footerComponent } from './driver/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowseRecommendationsLayoutComponent } from './books/browseRecs/browse-recommendations-layout.component';
import { HomeLayoutComponent } from './books/homeLayout/home-layout.component';
import { BrowseChoiceAwardsComponent } from './books/browseChoiceAwards/browse-choice-awards.component';
import { MyBooksComponent } from './books/myBooks/my-books.component';
import { BrowseGiveawaysComponent } from './books/browseGiveaways/browse-giveaways.component';
import { GiveawayCardComponent } from './books/giveawayCard/giveaway.card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AddProductComponent } from './books/add-product/add-product.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';









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
    AddProductComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
