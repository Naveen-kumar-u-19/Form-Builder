import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FormListComponent } from './components/forms/form-list/form-list.component';
import { HomeMenuDrawerComponent } from './components/main/home-menu-drawer/home-menu-drawer.component';
import { FolderComponent } from './components/forms/folder/folder.component';

export const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'app', component: HomeMenuDrawerComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'forms', component: FormListComponent },
          { path: 'folder', component: FolderComponent}
        ]
      },
      {
        path: 'forms', component: FormListComponent
      },
    ],
  }
];
