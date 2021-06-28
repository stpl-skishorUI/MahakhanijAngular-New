import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeLoginComponent } from './before-login.component';
import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SystemOverviewComponent } from './about/system-overview/system-overview.component';
import { AboutMineralsComponent } from './about/about-minerals/about-minerals.component';
import { DistrictMineralFoundationComponent } from './about/district-mineral-foundation/district-mineral-foundation.component';
import { InterstateMineralTransportComponent } from './application/interstate-mineral-transport/interstate-mineral-transport.component';
import { TemporaryProposalComponent } from './application/temporary-proposal/temporary-proposal.component';
import { NoticeComponent } from './eauction/notice/notice.component';
import { HowToParticipateComponent } from './eauction/how-to-participate/how-to-participate.component';
import { GovernmentResolutionComponent } from './policy/government-resolution/government-resolution.component';
import { FaqComponent } from './help/faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { NoticeDetailsComponent } from './eauction/notice-details/notice-details.component';
import { ScreenReaderAccessComponent } from './screen-reader-access/screen-reader-access.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        BeforeLoginRoutingModule,
        FormsModule
    ],
    declarations: [
        BeforeLoginComponent,
        HeaderComponent,
        FooterComponent,
        SystemOverviewComponent,
        AboutMineralsComponent,
        DistrictMineralFoundationComponent,
        InterstateMineralTransportComponent,
        TemporaryProposalComponent,
        NoticeComponent,
        HowToParticipateComponent,
        GovernmentResolutionComponent,
        FaqComponent,
        ContactComponent,
        NoticeDetailsComponent,
        ScreenReaderAccessComponent
    ],
    providers: [],
    exports: [
        BeforeLoginComponent
    ]
})

export class BeforeLoginModule {}