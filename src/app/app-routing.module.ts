import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AppCreationComponent } from './app-creation/app-creation.component';
import {AppOnboardingComponent} from './app-onboarding/app-onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
import {SaveFormComponent} from './save-form/save-form.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
//import {RootComponent} from './user-registration/user-registration.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'app-onboarding', component: AppOnboardingComponent },
{ path: 'workflow', component: WorkflowComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'app-creation', component: AppCreationComponent },
{path: 'save-form', component: SaveFormComponent},
{path: 'user-registration', component: UserRegistrationComponent},
{ path: '', redirectTo: 'registration', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
