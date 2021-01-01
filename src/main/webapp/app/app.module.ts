import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ExacAuditSharedModule } from 'app/shared/shared.module';
import { ExacAuditCoreModule } from 'app/core/core.module';
import { ExacAuditAppRoutingModule } from './app-routing.module';
import { ExacAuditHomeModule } from './home/home.module';
import { ExacAuditEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ExacAuditSharedModule,
    ExacAuditCoreModule,
    ExacAuditHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ExacAuditEntityModule,
    ExacAuditAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ExacAuditAppModule {}
