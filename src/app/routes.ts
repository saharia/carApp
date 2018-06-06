import { Routes } from "@angular/router";
import { HomeComponent } from "./admin/home/home.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";

import { LayoutComponent } from './admin/layout/layout.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

export const appRoutes : Routes = [
	{ path : "admin", component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path : 'home', component : HomeComponent }
    ]
  },
	{ 
		path : "signup", component : UserComponent, canActivate: [LoginGuard],
		children: [{ path : '', component : SignUpComponent }] 
	},
	{ 
		path : "login", component: UserComponent,  canActivate: [LoginGuard],
		children: [{ path : '', component : SignInComponent }] 
	},
	{ path : '', redirectTo : '/login', pathMatch : 'full' }
];