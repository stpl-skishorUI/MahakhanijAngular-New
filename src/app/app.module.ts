import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeforeLoginModule } from './before-login/before-login.module';
import { AfterLoginModule} from './after-login/after-login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BeforeLoginModule,
    AfterLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
