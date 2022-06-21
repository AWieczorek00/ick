import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiChartComponent } from './bmi-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  declarations: [BmiChartComponent],
  providers: [],
  exports: [BmiChartComponent],
})
export class BmiChartComponentModule {}
