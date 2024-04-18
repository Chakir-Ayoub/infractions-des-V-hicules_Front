import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { RegistrationNumberAuthentificationComponent } from './views/registration-number-authentification/registration-number-authentification.component';

const routes: Routes = [
  {path:'',children:[
    {path: '',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'login',component:RegistrationNumberAuthentificationComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
