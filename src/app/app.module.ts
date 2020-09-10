import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentViewComponent} from './content-view/content-view.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MovieComponent } from './movie/movie.component';
import { FavorisComponent } from './favoris/favoris.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DescriptionComponent } from './movie/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentViewComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    FavorisComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
