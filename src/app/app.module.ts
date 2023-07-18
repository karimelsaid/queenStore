import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StartVideoComponent } from './start-video/start-video.component';
import { TypesFabricComponent } from './types-fabric/types-fabric.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import { SadaFabricComponent } from './sectionFabric/sada-fabric/sada-fabric.component';
import { MeshgerFabricComponent } from './sectionFabric/meshger-fabric/meshger-fabric.component';
import { SewarihFabricComponent } from './sectionFabric/sewarih-fabric/sewarih-fabric.component';
import { AbayatFabricComponent } from './sectionFabric/abayat-fabric/abayat-fabric.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartVideoComponent,
    TypesFabricComponent,
    SadaFabricComponent,
    MeshgerFabricComponent,
    SewarihFabricComponent,
    AbayatFabricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavComponent]
})
export class AppModule { }
