import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { LotsComponent } from './components/projects/carousel/lots/lots.component';

import { GetDataService } from './services/get-data.service';
import { AstroNocComponent } from './components/projects/carousel/astro-noc/astro-noc.component';
import { IntroComponent } from './components/projects/carousel/intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    BubblesComponent,
    HobbiesComponent,
    ProjectsComponent,
    BakeryComponent,
    LotsComponent,
    AstroNocComponent,
    IntroComponent
  ],
  entryComponents: [
    LotsComponent,
    AstroNocComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2PageScrollModule,
    NgxCarouselModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
