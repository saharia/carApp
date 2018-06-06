import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './admin/home/home.component';

import { appRoutes } from './routes';

import { TheDb } from './models/db/thedb';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './admin/layout/header/header.component';
import { FooterComponent } from './admin/layout/footer/footer.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { LeftmenuComponent } from './admin/layout/leftmenu/leftmenu.component';
import { ThemesComponent } from './admin/layout/themes/themes.component';
import { AdminComponent } from './admin/admin.component';

TheDb.createDb('database/test');


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LeftmenuComponent,
    ThemesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
