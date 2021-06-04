import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemOverviewComponent } from './about/system-overview/system-overview.component';
import { AboutMineralsComponent } from './about/about-minerals/about-minerals.component';
import { DistrictMineralFoundationComponent } from './about/district-mineral-foundation/district-mineral-foundation.component';
 
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'system-overview', component: SystemOverviewComponent },
    { path: 'about-minerals', component: AboutMineralsComponent },
    { path: 'district-mineral-foundation', component: DistrictMineralFoundationComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BeforeLoginRoutingModule { }