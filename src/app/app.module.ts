import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppOnboardingComponent } from './app-onboarding/app-onboarding.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AppCreationComponent } from './app-creation/app-creation.component';
import { SaveFormComponent } from './save-form/save-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CaptchaComponent } from './captcha/captcha.component';
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';




//TABLE FOR ANGULAR

const appRoutes: Routes = [
  { path: '', component: RegistrationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RegistrationComponent,
    DashboardComponent,
    AppOnboardingComponent,
    WorkflowComponent,
    AppCreationComponent,
    SaveFormComponent,
    UserRegistrationComponent,
    CaptchaComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    RecaptchaModule, RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
