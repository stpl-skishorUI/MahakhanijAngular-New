import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemOverviewComponent } from './about/system-overview/system-overview.component';
import { AboutMineralsComponent } from './about/about-minerals/about-minerals.component';
import { DistrictMineralFoundationComponent } from './about/district-mineral-foundation/district-mineral-foundation.component';
import { InterstateMineralTransportComponent } from './application/interstate-mineral-transport/interstate-mineral-transport.component';
import { TemporaryProposalComponent } from './application/temporary-proposal/temporary-proposal.component';
import { NoticeComponent } from './eauction/notice/notice.component';
import { NoticeDetailsComponent } from './eauction/notice-details/notice-details.component';
import { HowToParticipateComponent } from './eauction/how-to-participate/how-to-participate.component';
import { GovernmentResolutionComponent } from './policy/government-resolution/government-resolution.component';
import { FaqComponent } from './help/faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ScreenReaderAccessComponent } from './screen-reader-access/screen-reader-access.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'system-overview', component: SystemOverviewComponent },
    { path: 'about-minerals', component: AboutMineralsComponent },
    { path: 'district-mineral-foundation', component: DistrictMineralFoundationComponent },
    { path: 'interstate-mineral-transport', component: InterstateMineralTransportComponent },
    { path: 'temporary-proposal', component: TemporaryProposalComponent },
    { path: 'notice', component: NoticeComponent },
    { path: 'notice-details', component: NoticeDetailsComponent },
    { path: 'HowToParticipate', component: HowToParticipateComponent },
    { path: 'government-resolution', component: GovernmentResolutionComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'screen-reader-access', component: ScreenReaderAccessComponent },
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