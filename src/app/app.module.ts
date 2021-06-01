import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BeforeLoginModule } from './before-login/before-login.module';
import { AfterLoginModule} from './after-login/after-login.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeforeLoginModule,
    AfterLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
