import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';
import {
  GETS_ONE_USER_DTO,
  GetsOneUserDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'lib-bmi-chart',
  templateUrl: './bmi-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./bmi-chart.component.css']
  })
export class BmiChartComponent {
  bmi: UserDTO | undefined;

  user$: Observable<UserDTO> = this._getsOneUserDto.getOne(
    'kTFyQ4TbaQ9XjSXDVirM'
  );

  constructor(
    @Inject(GETS_ONE_USER_DTO) private _getsOneUserDto: GetsOneUserDtoPort
  ) {}

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [171, 171],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [80, 75],
        type: 'line',
      },
    ],
  };

  getColor(bmi:number){
    if(18>bmi){
      return "blue"
    }else if(bmi >= 18 && bmi < 25){
      return "greenyellow"
    }else if(bmi >= 25 && bmi < 29){
      return "yellow"
    }else if(bmi >= 29 && bmi < 40){
      return "orange"
    }else if(bmi >= 40){
      return "red"
    }

    return "black"
  }
}
