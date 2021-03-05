import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './main/app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ROUTES }from './app.routes';
import { ImageVerifyPipe } from './pipes/image-verify.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { ErrorAlertComponent } from './components/shared/error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    FooterComponent,
    ImageVerifyPipe,
    CardComponent,
    LoadingComponent,
    SafeDomPipe,
    ErrorAlertComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( ROUTES )
  ],
  
  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }