import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentViewComponent} from './content-view/content-view.component';

const routes: Routes = [
  { path: '', component: ContentViewComponent },
  { path: 'home', component: ContentViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
