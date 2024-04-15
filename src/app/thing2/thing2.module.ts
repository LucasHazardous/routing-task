import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thing2Component } from './thing2.component';
import { Inside1Component } from '../inside1/inside1.component';
import { Inside2Component } from '../inside2/inside2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inside1', component: Inside1Component },
  { path: 'inside2', component: Inside2Component }
];

@NgModule({
  declarations: [
    Thing2Component,
    Inside1Component,
    Inside2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Thing2Component,
    RouterModule
  ]
})
export class Thing2Module { }
