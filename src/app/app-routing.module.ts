import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseRecommendationsLayoutComponent } from './books/browseRecs/browse-recommendations-layout.component';
import { HomeLayoutComponent } from './books/homeLayout/home-layout.component';
import { BrowseChoiceAwardsComponent} from './books/browseChoiceAwards/browse-choice-awards.component';
import { MyBooksComponent } from './books/myBooks/my-books.component';
import { BrowseGiveawaysComponent } from './books/browseGiveaways/browse-giveaways.component';
import { AddProductComponent } from './books/add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NewReleasesComponent } from './newReleases/new-releases.component';





const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'home', component: HomeLayoutComponent },
  { path: 'admin', component: AddProductComponent },
  { path: 'Browse-Recommendations', component: BrowseRecommendationsLayoutComponent },
  { path: 'Browse-Choice-Awards', component: BrowseChoiceAwardsComponent},
  { path: 'My-Books', component: MyBooksComponent},
  { path: 'Browse-Giveaways', component: BrowseGiveawaysComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'new-releases', component: NewReleasesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
