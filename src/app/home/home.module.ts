import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnergiaComponent } from '../Components/energia/energia.component';
import { Energia3Component } from '../Components/energia/energia3/energia3.component';
import { Energia2Component } from '../Components/energia/energia2/energia2.component';
import { MedioAmbienteComponent } from '../Components/medio-ambiente/medio-ambiente.component';
import { FinanzasComponent } from '../Components/finanzas/finanzas.component';
import { HomePage } from './home.page';
import { Chart1Component } from '../Components/chart1/chart1.component';
import { ChartModule } from 'angular-highcharts';
import { PopoverPageModule } from '../popover/popover.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartModule,
    PopoverPageModule,
    
    
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, EnergiaComponent, MedioAmbienteComponent, 
    FinanzasComponent, Chart1Component, Energia2Component, Energia3Component]
})
export class HomePageModule {}
