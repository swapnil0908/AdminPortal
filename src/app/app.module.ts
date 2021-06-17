import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppOnboardingComponent } from './app-onboarding/app-onboarding.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AppCreationComponent } from './app-creation/app-creation.component';



//TABLE FOR ANGULAR
//import { MatTableModule} from '@angular/material/table';

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
    AppCreationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
