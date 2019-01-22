import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
  
  RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home',  component: HomeComponent },
      { path: 'about', component: AboutComponent},
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {

}