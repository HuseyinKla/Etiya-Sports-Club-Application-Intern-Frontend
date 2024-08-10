import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/general/login-page/login-page.component';
import { MarketPageComponent } from './pages/member/market-page/market-page.component';
import { LibraryPageComponent } from './pages/member/library-page/library-page.component';
import { CalendarPageComponent } from './pages/general/calendar-page/calendar-page.component';
import { RoleGuard } from './guards/role-guard/role.guard';
import { CreateBundlePageComponent } from './pages/admin/create-bundle-page/create-bundle-page.component';
import { AllLogsPageComponent } from './pages/admin/all-logs-page/all-logs-page.component';
import { RemainingCoursesPageComponent } from './pages/admin/remaining-courses-page/remaining-courses-page.component';
import { NotFoundPageComponent } from './pages/general/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'calendar', component: CalendarPageComponent, canActivate: [RoleGuard], data: { expectedRole: ['member', 'admin'] } },

  { path: 'market', component: MarketPageComponent, canActivate: [RoleGuard], data: { expectedRole: ['member'] } },
  { path: 'library', component: LibraryPageComponent, canActivate: [RoleGuard], data: { expectedRole: ['member'] } },

  { path: 'create-bundle', component: CreateBundlePageComponent, canActivate: [RoleGuard], data: { expectedRole: ['admin'] } },
  { path: 'all-logs', component: AllLogsPageComponent, canActivate: [RoleGuard], data: { expectedRole: ['admin'] } },
  { path: 'remaining-courses', component: RemainingCoursesPageComponent, canActivate: [RoleGuard], data: { expectedRole: ['admin'] } },
  
  { path: '403', component: NotFoundPageComponent },
  { path: '**', redirectTo: '403' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
