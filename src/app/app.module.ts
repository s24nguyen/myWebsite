import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BakeryComponent } from './components/bakery/bakery.component';

import { JobListService } from './services/job-list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    BubblesComponent,
    HobbiesComponent,
    ProjectsComponent,
    BakeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
