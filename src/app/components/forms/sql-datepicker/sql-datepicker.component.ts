import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule  }  from '@angular/material/icon';
import { DataService } from 'src/app/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
   
export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'MM/DD/YYYY',
    },
    display: {
      dateInput: 'MM/DD/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
};

@Component({
  selector: 'sql-datepicker',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MomentDateModule, 
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './sql-datepicker.component.html',
  styleUrls: ['./sql-datepicker.component.css'],
  providers: [
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  ]
})
export class SqlDatepickerComponent  implements OnInit, AfterViewInit {

  @Input() col: string = '';
  @Input() data: any;
  @Input() class: any = '';
  @Input() style: any = '';
  @Input() hint: string = '';
  @Input() icon: string = '';
  @Input() label: string = 'Label not set';
  @Input() placeholder: any = '';
  @Input() appearance: string = 'fill';
  @Input() bs_row: any = 'Y';
  @Input() bs_col: any = 'col-12';
  @Input() top_label: any = 'N';
  counter: number = 0;
  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();  

  events: string[] = [];
  fieldData: any;
  value: any;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngAfterViewInit() {
    console.log('AVI in sql-input')
  
  }

  formData: any;
  constructor(private _dataService: DataService, private datePipe: DatePipe) { 
    this._dataService.dataSubject.subscribe(d => {
      this.data=d;
      this.fieldData = this.data;
      this.value = this.fieldData[this.col];
      this.counter++;
      console.log('sql-input: ' + this.counter)
      console.log(d)
    })
  }

  ngOnInit(): void {

  }

  handleChange() {
     console.log('sql-datepicker change')
     console.log(this.datePipe.transform(this.value, 'yyyy-MM-dd'))
     this.fieldData['submit']='N';
     this.fieldData[this.col]=this.datePipe.transform(this.value, 'yyyy-MM-dd');
     console.log(this.fieldData)
     console.log('sql-datepicker')
     console.log(this.fieldData)
     this._dataService.pushNotification(this.fieldData);
  }

}

