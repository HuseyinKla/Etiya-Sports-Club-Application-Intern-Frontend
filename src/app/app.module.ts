import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BundleComponent } from './components/bundle/bundle.component';
import { BundleModalComponent } from './components/bundle-modal/bundle-modal.component';
import { MyBundleComponent } from './components/my-bundle/my-bundle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    MarketPageComponent,
    LibraryPageComponent,
    CalendarPageComponent,
    ProfilePageComponent,
    BundleComponent,
    BundleModalComponent,
    MyBundleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
