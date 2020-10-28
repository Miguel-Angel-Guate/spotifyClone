import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//routs
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
