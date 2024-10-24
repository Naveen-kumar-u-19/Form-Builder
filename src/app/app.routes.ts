import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FormListComponent } from './components/forms/form-list/form-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms', component: FormListComponent }

    ]
  }
];
