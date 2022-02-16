import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowseRecommendationsLayoutComponent } from './books/browse-recommendations-layout.component';
import { HomeLayoutComponent } from './books/home-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'Browse-Recommendations', component: BrowseRecommendationsLayoutComponent },
  { path: 'home', component: HomeLayoutComponent }
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
