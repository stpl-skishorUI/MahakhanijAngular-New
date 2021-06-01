import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeLoginComponent } from './before-login.component';
import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        BeforeLoginRoutingModule
    ],
    declarations: [
        BeforeLoginComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
    exports: [
        BeforeLoginComponent
    ]
})

export class BeforeLoginModule {}