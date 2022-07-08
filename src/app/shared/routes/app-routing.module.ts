import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../layouts/auth/login/login.component';
import { RegisterComponent } from '../../layouts/auth/register/register.component';
import { HomeComponent } from '../../layouts/home/home.component';
import { MoviesComponent } from '../../layouts/movies/movies.component';
import { DashboardComponent } from '../../layouts/admin/dashboard/dashboard.component';
import { ProfileComponent } from '../../layouts/admin/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { OverviewComponent } from 'src/app/layouts/movie-details/overview/overview.component';
import { SpecComponent } from 'src/app/layouts/movie-details/spec/spec.component';
import { MovieDetailsComponent } from 'src/app/layouts/movie-details/movie-details.component';
import { PageNotFoundComponent } from 'src/app/layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'register', 
    component: RegisterComponent
  },
  {
    path:'login', 
    component: LoginComponent
  },

  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
  },
    
  { path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'movies', 
    component: MoviesComponent
  },

  {
    path:'movie-details/:id', component: MovieDetailsComponent,
    children: [
      { path: 'overview', component: OverviewComponent},
      { path: 'spec', component: SpecComponent}
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }

  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
