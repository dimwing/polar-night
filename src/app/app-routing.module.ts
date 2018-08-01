import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolyGrailLayoutComponent } from './holy-grail-layout/holy-grail-layout.component';
import { ShuangFeiYiLayoutComponent } from './shuang-fei-yi-layout/shuang-fei-yi-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holy-grail-layout', component: HolyGrailLayoutComponent },
  { path: 'shuangfeiyi-layout', component: ShuangFeiYiLayoutComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { 
}
