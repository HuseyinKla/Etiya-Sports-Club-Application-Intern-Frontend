import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'market', component: MarketPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
