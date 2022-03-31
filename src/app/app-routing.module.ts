import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseRecommendationsLayoutComponent } from './books/browse-recommendations-layout.component';
import { HomeLayoutComponent } from './books/home-layout.component';
import { BrowseChoiceAwardsComponent} from './books/browse-choice-awards.component';
import { MyBooksComponent } from './books/my-books.component';
import { BrowseGiveawaysComponent } from './books/browse-giveaways.component';
import { AddProductComponent } from './books/add-product/add-product.component';



const routes: Routes = [
  { path: 'home', component: HomeLayoutComponent },
  { path: 'home', component: AddProductComponent },
  { path: 'Browse-Recommendations', component: BrowseRecommendationsLayoutComponent },
  { path: 'Home', component: HomeLayoutComponent },
  { path: 'Browse-Choice-Awards', component: BrowseChoiceAwardsComponent},
  { path: 'My-Books', component: MyBooksComponent},
  { path: 'Browse-Giveaways', component: BrowseGiveawaysComponent}
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
