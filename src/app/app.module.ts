import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';
import { ShuangFeiYiLayoutComponent } from './shuang-fei-yi-layout/shuang-fei-yi-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HolyGrailLayoutComponent,
    ShuangFeiYiLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
