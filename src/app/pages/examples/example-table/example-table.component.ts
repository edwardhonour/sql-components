import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlTableComponent } from 'src/app/components/table/sql-table/sql-table.component'; 
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { SqlFormComponent } from 'src/app/components/forms/sql-form/sql-form.component'; 
import { SqlInputComponent } from 'src/app/components/forms/sql-input/sql-input.component'; 
import { SqlSelectComponent } from 'src/app/components/forms/sql-select/sql-select.component';
import { SqlDatepickerComponent } from 'src/app/components/forms/sql-datepicker/sql-datepicker.component'; 
import { SqlTextareaComponent } from 'src/app/components/forms/sql-textarea/sql-textarea.component'; 
import { SqlSubmitComponent } from 'src/app/components/forms/sql-submit/sql-submit.component'; 


@Component({
  selector: 'app-example-table',
  standalone: true,
  imports: [CommonModule, SqlTableComponent, SqlFormComponent, 
    SqlInputComponent, SqlSelectComponent, SqlDatepickerComponent, 
  SqlTextareaComponent, SqlSubmitComponent],
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent {

  data: any;
  params: any;
  m: any; 

  constructor(
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute,
) { }

  ngOnInit() {
      this._activatedRoute.data.subscribe(({ params }) => {
        this.params=params;
        console.log(this.params)
    })
  }

  doNothing(m: any) {
      console.log(m);
  }

}
