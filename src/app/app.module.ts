/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TransferComponent } from './Transfer/Transfer.component';
import { ContractComponent } from './Contract/Contract.component';

import { HospitalComponent } from './Hospital/Hospital.component';
import { MarketplaceComponent } from './Marketplace/Marketplace.component';
import { ResearchInstComponent } from './ResearchInst/ResearchInst.component';

import { TransferReceivedComponent } from './TransferReceived/TransferReceived.component';
import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';
import { AnonymizeEncryptComponent } from './AnonymizeEncrypt/AnonymizeEncrypt.component';
import { ProductComponent } from './product/product.component';
import { InsideHomeComponent } from './inside-home/inside-home.component';

// import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { PageComponent } from './Pages/page.component';

const appRoutes: Routes = [
  { path: '', component: InsideHomeComponent }
  // { path: 'repo', component: RepositoryComponent, canActivate: [AuthGuardService] },
  // { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuardService] },
  // { path: 'tfs-portal', component: TfsPortalComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransferComponent,
    ContractComponent,
    HospitalComponent,
    MarketplaceComponent,
    ResearchInstComponent,
    TransferReceivedComponent,
    SetupDemoComponent,
    AnonymizeEncryptComponent,
    ProductComponent,
    InsideHomeComponent,
    //PageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    // AppRoutingModule
    // BrowserAnimationsModule
    // MdToolbarModule,
    // MdButtonModule,
    // MdCardModule
    , RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
