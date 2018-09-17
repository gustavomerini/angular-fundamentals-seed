import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/paassenger-detail/passenger-detail.component';

import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassenverViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassenverViewerComponent,
    PassengerFormComponent
  ],
  imports: [CommonModule, HttpModule, FormsModule],
  exports: [PassenverViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
