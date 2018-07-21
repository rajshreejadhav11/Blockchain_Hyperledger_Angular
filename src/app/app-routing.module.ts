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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TransferComponent } from './Transfer/Transfer.component';
import { ContractComponent } from './Contract/Contract.component';

import { HospitalComponent } from './Hospital/Hospital.component';
import { MarketplaceComponent } from './Marketplace/Marketplace.component';
import { ResearchInstComponent } from './ResearchInst/ResearchInst.component';

import { TransferReceivedComponent } from './TransferReceived/TransferReceived.component';
import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';
import { AnonymizeEncryptComponent } from './AnonymizeEncrypt/AnonymizeEncrypt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Transfer', component: TransferComponent },
  { path: 'Contract', component: ContractComponent },
  { path: 'Hospital', component: HospitalComponent },
  { path: 'Marketplace', component: MarketplaceComponent },
  { path: 'ResearchInst', component: ResearchInstComponent },
  { path: 'TransferReceived', component: TransferReceivedComponent },
  { path: 'SetupDemo', component: SetupDemoComponent },
  { path: 'AnonymizeEncrypt', component: AnonymizeEncryptComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
