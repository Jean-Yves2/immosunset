import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { NgIconsModule } from '@ng-icons/core';
import  {heroShareSolid, heroHeartSolid, heroBellAlertSolid}  from '@ng-icons/heroicons/solid';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    HouseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroShareSolid, heroHeartSolid, heroBellAlertSolid}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
