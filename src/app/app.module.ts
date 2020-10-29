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
//services
import { SpofityService } from './services/spofity.service';
//pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { CardsComponent } from './components/cards/cards.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    LoadingComponent,
    CardsComponent,
    DomseguroPipe,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule],
  providers: [SpofityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
