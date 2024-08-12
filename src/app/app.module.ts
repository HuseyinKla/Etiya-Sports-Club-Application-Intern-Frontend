import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/general/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketPageComponent } from './pages/member/market-page/market-page.component';
import { LibraryPageComponent } from './pages/member/library-page/library-page.component';
import { CalendarPageComponent } from './pages/general/calendar-page/calendar-page.component';
import { BundleComponent } from './components/bundle/bundle.component';
import { BundleModalComponent } from './components/bundle-modal/bundle-modal.component';
import { MyBundleComponent } from './components/my-bundle/my-bundle.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { WrongProgressInitModalComponent } from './components/wrong-progress-init-modal/wrong-progress-init-modal.component';
import { CreateBundlePageComponent } from './pages/admin/create-bundle-page/create-bundle-page.component';
import { AllLogsPageComponent } from './pages/admin/all-logs-page/all-logs-page.component';
import { RemainingCoursesPageComponent } from './pages/admin/remaining-courses-page/remaining-courses-page.component';
import { NotFoundPageComponent } from './pages/general/not-found-page/not-found-page.component';
import { AdminBundlesPageComponent } from './pages/admin/admin-bundles-page/admin-bundles-page.component';
import { RegisterPageComponent } from './pages/general/register-page/register-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    MarketPageComponent,
    LibraryPageComponent,
    CalendarPageComponent,
    BundleComponent,
    BundleModalComponent,
    MyBundleComponent,
    WrongProgressInitModalComponent,
    CreateBundlePageComponent,
    AllLogsPageComponent,
    RemainingCoursesPageComponent,
    NotFoundPageComponent,
    AdminBundlesPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
