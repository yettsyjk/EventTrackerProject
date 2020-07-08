import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobService } from './services/job.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { JobPipe } from './pipes/job.pipe';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { JobappComponent } from './components/jobapp/jobapp.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    JoblistComponent,
    JobPipe,
    UserProfileComponent,
    AdminComponent,
    SearchComponent,
    JobappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    UserService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
