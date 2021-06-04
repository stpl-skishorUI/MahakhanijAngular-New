import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeLoginComponent } from './before-login.component';
import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SystemOverviewComponent } from './about/system-overview/system-overview.component';
import { AboutMineralsComponent } from './about/about-minerals/about-minerals.component';
import { DistrictMineralFoundationComponent } from './about/district-mineral-foundation/district-mineral-foundation.component';

@NgModule({
    imports: [
        CommonModule,
        BeforeLoginRoutingModule
    ],
    declarations: [
        BeforeLoginComponent,
        HeaderComponent,
        FooterComponent,
        SystemOverviewComponent,
        AboutMineralsComponent,
        DistrictMineralFoundationComponent
    ],
    providers: [],
    exports: [
        BeforeLoginComponent
    ]
})

export class BeforeLoginModule {}