import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentViewComponent} from './content-view/content-view.component';
import {DescriptionComponent} from './movie/description/description.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: ContentViewComponent},
  {path: 'movies/description/:id', component: DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
