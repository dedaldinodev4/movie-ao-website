import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieTypeComponent } from './components/movie-type/movie-type.component';
import { MovieService } from './shared/services/movie.service';
import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';
import { HomeComponent } from './layouts/home/home.component';
import { MoviesComponent } from './layouts/movies/movies.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { ProfileComponent } from './layouts/admin/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth.guard';
import { AppRoutingModule } from './shared/routes/app-routing.module';
import { UserService } from './shared/services/user.service';
import { AuthModule } from './layouts/auth/auth.module';
import { MovieDetailsComponent } from './layouts/movie-details/movie-details.component';
import { OverviewComponent } from './layouts/movie-details/overview/overview.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SpecComponent } from './layouts/movie-details/spec/spec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MovieTypeComponent,
    HomeComponent,
    MoviesComponent,
    DashboardComponent,
    ProfileComponent,
    MovieDetailsComponent,
    OverviewComponent,
    PageNotFoundComponent,
    LoaderComponent,
    SpecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    AuthService, 
    MovieService, 
    UserService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
